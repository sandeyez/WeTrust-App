export const phase1Steps = [
    {
        title: 'Stroke Onset',
        obligated: true,
        imageUri: './assets/stepIcons/1.png'
    },
    { 
        title: 'Emergency Phone Call',
        obligated: false,
        imageUri: './assets/stepIcons/2.png'

    },
    { 
        title: 'Ambulance Arrival', 
        obligated: false,
        imageUri: './assets/stepIcons/3.png'
    },
    { 
        title: 'Notification Stroke Team',
        obligated: true,
        imageUri: './assets/stepIcons/4.png' 
    },
    { 
        title: 'Hospital Door Arrival', 
        obligated: true,
        imageUri: './assets/stepIcons/5.png'

    },
    { 
        title: 'Randomization', 
        obligated: true,
        imageUri: './assets/stepIcons/6.png'
    },
];

export const phase2Steps = {
    "DTAS": [
        {
            title: 'Angio Suite Arrival', 
            obligated: true,
            imageUri: './assets/stepIcons/7.png'
        },
        {
            title: 'Triage Imaging', 
            obligated: true,
            imageUri: './assets/stepIcons/8.png'
        },
        {
            title: 'Time of diagnosis image', 
            obligated: true,
            imageUri: './assets/stepIcons/9.png'
        },
        {
            title: 'Trombolytics Administration', 
            obligated: false,
            imageUri: './assets/stepIcons/9.png'
        },
    ],
    "CR": [
        {
            title: 'Arrival CT Room', 
            obligated: true,
            imageUri: './assets/stepIcons/7.png'
        },
        {
            title: 'Triage Imaging', 
            obligated: true,
            imageUri: './assets/stepIcons/8.png'
        },
        {
            title: 'Time of diagnosis image', 
            obligated: true,
            imageUri: './assets/stepIcons/9.png'
        },
        {
            title: 'Trombolytics Administration', 
            obligated: false,
            imageUri: './assets/stepIcons/9.png'
        },
        {
            title: 'Angio Suite Arrival', 
            obligated: true,
            imageUri: './assets/stepIcons/7.png'
        },
    ],

}

export const phase3Steps = [
{ title: 'Arterial Puncture', obligated: true },
{ title: 'Device Deployment', obligated: true },
{ title: 'Succesfull Reperfusion', obligated: true },
{ title: 'Skin Closure', obligated: true },
{ title: 'Finish report', obligated: true },
];