import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `
        <header class="w-screen bg-secondary text-secondary-foreground m-0 p-0 z-20">
            <div class="w-full max-w-none flex items-center justify-between px-4 py-3">
                <!-- Left: Logo & Title -->
                <div class="flex items-center gap-3">
                    <img
                        class="hover:cursor-pointer transition-transform hover:scale-105 w-12 h-12"
                        src="/angular_vaulted_logo.svg"
                        alt="Angular Vaulted Logo"
                    />
                    <div class="flex flex-col">
                        <span class="text-3xl font-bold">Angular Vaulted</span>
                    </div>
                </div>

                <!-- Right: Mode Toggle -->
                <div class="flex items-center gap-4 pl-5">
                    <!-- Placeholder for future header elements -->
                    <h1></h1>
                </div>
            </div>
        </header>
    `,
})
export class HeaderComponent {}
