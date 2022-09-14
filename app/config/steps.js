/* eslint-disable eol-last */
/* eslint-disable global-require */
/* eslint-disable indent */
export const phase1Steps = [{
        title: 'Stroke Onset',
        obligated: true,
        imageUri: require('../../assets/stepIcons/1.png'),
        id: 1,
    },
    {
        title: 'Emergency Phone Call',
        obligated: false,
        imageUri: require('../../assets/stepIcons/2.png'),
        id: 2,
    },
    {
        title: 'Ambulance Arrival',
        obligated: false,
        imageUri: require('../../assets/stepIcons/3.png'),
        id: 3,

    },
    {
        title: 'Notification Stroke Team',
        obligated: true,
        imageUri: require('../../assets/stepIcons/4.png'),
        id: 4,

    },
    {
        title: 'Hospital Door Arrival',
        obligated: true,
        imageUri: require('../../assets/stepIcons/5.png'),
        id: 5,
    },
    {
        title: 'Randomization',
        obligated: true,
        imageUri: require('../../assets/stepIcons/6.png'),
        id: 6,
    },
];

export const phase2Steps = {
    DTAS: [{
            title: 'Angio Suite Arrival',
            obligated: true,
            imageUri: require('../../assets/stepIcons/7.png'),
            id: 7,
        },
        {
            title: 'Triage Imaging',
            obligated: true,
            imageUri: require('../../assets/stepIcons/8.png'),
            id: 8,
        },
        {
            title: 'Time of diagnosis image',
            obligated: true,
            imageUri: require('../../assets/stepIcons/9.png'),
            id: 9,
        },
        {
            title: 'Trombolytics Administration',
            obligated: false,
            imageUri: require('../../assets/stepIcons/10.png'),
            id: 10,
        },
    ],
    CR: [{
            title: 'Arrival CT Room',
            obligated: true,
            imageUri: require('../../assets/stepIcons/16.png'),
            id: 16,
        },
        {
            title: 'Triage Imaging',
            obligated: true,
            imageUri: require('../../assets/stepIcons/8.png'),
            id: 8,
        },
        {
            title: 'Time of diagnosis image',
            obligated: true,
            imageUri: require('../../assets/stepIcons/9.png'),
            id: 9,
        },
        {
            title: 'Trombolytics Administration',
            obligated: false,
            imageUri: require('../../assets/stepIcons/10.png'),
            id: 10,
        },
        {
            title: 'Angio Suite Arrival',
            obligated: true,
            imageUri: require('../../assets/stepIcons/7.png'),
            id: 7,
        },
    ],

};

export const phase3Steps = [{
        title: 'Arterial Puncture',
        obligated: true,
        imageUri: require('../../assets/stepIcons/11.png'),
        id: 11,
    },
    {
        title: 'Device Deployment',
        obligated: true,
        imageUri: require('../../assets/stepIcons/12.png'),
        id: 12,
    },
    {
        title: 'Succesfull Reperfusion',
        obligated: true,
        imageUri: require('../../assets/stepIcons/13.png'),
        id: 13,
    },
    {
        title: 'Catheter Out',
        obligated: true,
        imageUri: require('../../assets/stepIcons/14.png'),
        id: 14,
    },
    {
        title: 'Finish report',
        obligated: true,
        imageUri: require('../../assets/stepIcons/15.png'),
        id: 15,
    },
];