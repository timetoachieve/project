const data = {
    companyList: {
        columns: [
            {
                id: 'name',
                label: 'Company Name',        
            },
            {
                id: 'departments',
                label: 'Departments'
            },
            {
                id: 'cgpa',
                label: 'CGPA'
            },
            {
                id: 'backlog',
                label: 'Backlog'
            },
            {
                id: 'stipend',
                label: 'Stipend'
            },
            {
                id: 'deadline',
                label: 'Last Date',
            },
            {
                id: 'status',
                label: 'Status'
            },
            {
                id: 'description',
                label: 'Description'
            },
            {
                id: 'apply',
                label: 'Apply'
            }
        ],
        rows: []
    },
    scheduleList: {
        columns: [
            {
                id: 'date',
                label: 'Date',        
            },
            {
                id: 'time',
                label: 'Time'
            },
            {
                id: 'venue',
                label: 'Venue'
            },
            {
                id: 'company',
                label: 'Company'
            },
            {
                id: 'task',
                label: 'Task Scheduled'
            }
        ],
        rows: []
    }
};

export default data;
