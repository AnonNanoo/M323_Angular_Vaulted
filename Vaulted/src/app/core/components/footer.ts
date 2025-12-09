// src/app/core/components/footer.ts
import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
        <footer class="fixed bottom-0 left-0 w-screen bg-secondary text-secondary-foreground py-4 mt-auto z-50">
            <div class="w-full max-w-none flex items-center justify-between px-4 relative">
                <p class="text-sm absolute left-1/2 -translate-x-1/2">
                    &copy; {{ currentYear }} Angular-Vaulted. All rights reserved.
                </p>

                <div class="flex items-center gap-4 ml-auto">
                    <a
                        [href]="githubUrl"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex items-center gap-2 hover:underline"
                    >
                        @{{ githubUsername }}
                        <img
                            [src]="githubAvatar"
                            alt="GitHub Avatar"
                            class="w-8 h-8 rounded-full border border-gray-300"
                        />
                    </a>
                    <button
                        (click)="openProject()"
                        class="hover:cursor-pointer transition-transform hover:scale-110"
                    >
                        <img class="block w-8 h-8" src="/github-logo.svg" alt="GitHub Repository" />
                    </button>
                </div>
            </div>
        </footer>
    `,
})
export class FooterComponent {
    githubUsername = 'AnonNanoo';
    githubUrl = `https://github.com/${this.githubUsername}`;
    githubAvatar = `https://github.com/${this.githubUsername}.png`;
    githubProjectUrl = 'https://github.com/AnonNanoo/M323_Angular_Vaulted';
    currentYear = new Date().getFullYear();

    openProject() {
        window.open(this.githubProjectUrl, '_blank');
    }
}
