import { Component } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styles: `
      .list-group {
      display: flex;
      flex-direction: column; /* Vertical by default */
    }

    .list-group-item {
      width: 100%;
    }

    /* Styles for small screens */
    @media (max-width: 768px) {
      .list-group {
        flex-direction: row; /* Horizontal for small screens */
        justify-content: space-around; /* Adjust items spacing */
      }

      .list-group-item {
        flex: 1; /* Make items take equal space */
        width: auto;
      }
    }
  `,
})
export class SidebarComponent {}
