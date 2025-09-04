import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BugService {
  private bugs = [
    {
      id: '#BT-1209',
      title: 'OAuth callback fails on Safari',
      project: 'Web App',
      priority: 'Critical',
      status: 'Open',
      assignee: 'Sam',
      environment: 'MacOS / Safari 16',
      tags: 'Auth, Web',
      reproduction: 'Steps to reproduce available',
      created: '01-08-2025',
      updated: '02-08-2025',
      lastActivity: 'Comment by Priya 30m ago'
    },
    {
      id: '#BT-1188',
      title: 'Chart labels overlap in RTL',
      project: 'API',
      priority: 'High',
      status: 'In Progress',
      assignee: 'Priya',
      environment: 'Linux / Chrome 115',
      tags: 'Charts, RTL',
      reproduction: 'Steps attached in ticket',
      created: '28-07-2025',
      updated: '02-08-2025',
      lastActivity: 'Updated status 2h ago'
    },
    {
      id: '#BT-1120',
      title: 'Dark mode contrast on badges',
      project: 'Mobile',
      priority: 'Medium',
      status: 'Resolved',
      assignee: 'Alex',
      environment: 'iOS / Safari 16',
      tags: 'UI, Dark Mode',
      reproduction: 'Repro steps in description',
      created: '25-07-2025',
      updated: '01-08-2025',
      lastActivity: 'Closed by Maria 1d ago'
    }
  ];

  getBugs() {
    return this.bugs;
  }

  addBug(bugData: any) {
    const newBug = {
      id: `#BT-${1210 + this.bugs.length}`,
      title: bugData.title,
      project: bugData.project,
      priority: bugData.priority,
      status: bugData.status,
      assignee: bugData.assignee,
      environment: bugData.environment,
      tags: bugData.tags,
      reproduction: bugData.reproduction,
      created: new Date().toLocaleDateString('en-GB'),
      updated: new Date().toLocaleDateString('en-GB'),
      lastActivity: 'Just created'
    };
    this.bugs.unshift(newBug);
  }
}