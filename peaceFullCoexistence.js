User = [
    {
        name: 'Thomas',
        openIssues: [
            {
                title: 'Fix bike',
                category: 'kitchen'
            },
            {
                title: 'Sell e-organ',
                category: 'corridor'
            },
        ]
    },
    {
        name: 'Advait',
        openIssues: [
            {
                title: 'Clean the dishes',
                category: 'kitchen'
            },
            {
                title: 'Cook lentils',
                category: 'kitchen'
            }
        ]
    },
    {
        name: 'Galib',
        openIssues: [
            {
                title: 'Clean gurbage',
                category: 'Kitchen'
            },
            {
                title: 'Mop toilet',
                category: 'toilet'
            },
        ]
    }
];

class Issue {
    constructor(title, description, assignee, assignDate) {
        this.title = title;
        this.description = description || 'No description';
        this.assignee = assignee;
        this.assignDate = assignDate;
    };

    assign() {
        // assign the issue to specific user
    }

    resolve() {
        // resolve the issues
    }
}
