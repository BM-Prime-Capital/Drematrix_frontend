import { Component } from '@angular/core';
import { DashboardModule } from '../layout/dashboard/dashboard.module';
import { HeaderComponent } from '../layout/header/header.component';
import { SidebarComponent } from '../layout/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { profileType } from '../models/profile.types';
import { ProfileHeaderComponent } from '../profile-header/profile-header.component';
import { ProfileEditionComponent } from '../profile-edition/profile-edition.component';
import { ProfileSettingsComponent } from '../profile-settings/profile-settings.component';
import { ActivityTrackingComponent } from '../activity-tracking/activity-tracking.component';
import { TeacherAiAssistanceComponent } from '../teacher-ai-assistance/teacher-ai-assistance.component';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    DashboardModule,
    HeaderComponent,
    SidebarComponent,
    RouterOutlet,
    TeacherAiAssistanceComponent,
    ProfileHeaderComponent,
    ProfileEditionComponent,
    ProfileSettingsComponent,
    ActivityTrackingComponent
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {

  currentProfile: profileType = "teacher";

}
