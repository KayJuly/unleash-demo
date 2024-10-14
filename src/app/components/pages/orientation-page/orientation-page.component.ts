import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FeathericonComponent } from '../../../shared/component/feathericon/feathericon.component';
import { ModalService } from '../../../shared/services/modal.service';

interface YTEvent {
    data: number;
}

interface YTPlayer {
    PlayerState: {
        ENDED: number;
    };
    Player: new (elementId: string | HTMLElement, options: YTPlayerOptions) => YTPlayerInstance;
}

interface YTPlayerOptions {
    videoId: string;
    events: {
        onReady?: (event: YTEvent) => void;
        onStateChange: (event: YTEvent) => void;
    };
}

interface YTPlayerInstance {
    // Add any methods you need to call on the player instance
    playVideo(): void;
}

declare global {
    interface Window {
        YT: YTPlayer;
        onYouTubeIframeAPIReady: () => void;
    }
}

@Component({
    selector: 'app-orientation-page',
    standalone: true,
    imports: [RouterLink, FeathericonComponent],
    templateUrl: './orientation-page.component.html',
    styleUrl: './orientation-page.component.scss',
})
export class OrientationPageComponent implements OnInit, AfterViewInit {
    @ViewChild('youtubePlayer') youtubePlayerElement!: ElementRef;

    player: YTPlayerInstance | null = null;
    isVideoCompleted = false;
    videoId = 'QF8Zr7_-2A8';
    isApiLoaded = false;

    constructor(private modalService: ModalService) {}

    ngOnInit() {
        if (!window.YT) {
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            document.body.appendChild(tag);

            window.onYouTubeIframeAPIReady = () => {
                this.isApiLoaded = true;
                this.initializeYouTubePlayer();
            };
        } else {
            this.isApiLoaded = true;
        }
    }

    ngAfterViewInit() {
        if (this.isApiLoaded) {
            this.initializeYouTubePlayer();
        }
    }

    initializeYouTubePlayer() {
        if (this.youtubePlayerElement && this.youtubePlayerElement.nativeElement) {
            this.player = new window.YT.Player(this.youtubePlayerElement.nativeElement, {
                videoId: this.videoId,
                events: {
                    onReady: this.onPlayerReady.bind(this),
                    onStateChange: this.onPlayerStateChange.bind(this),
                },
            });
        } else {
            console.error('YouTube player element not found');
        }
    }

    onPlayerReady(event: YTEvent) {
        console.log('YouTube player is ready');
        // You can start the video here if you want
    }

    onPlayerStateChange(event: YTEvent) {
        if (event.data === window.YT.PlayerState.ENDED) {
            this.isVideoCompleted = true;
        }
    }

    openModal(content: any) {
        this.modalService.openModal(content);
    }
}