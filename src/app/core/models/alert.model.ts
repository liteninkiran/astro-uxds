export const AlertSeverityObject = {
    critical: 'critical',
    serious: 'serious',
    warning: 'warning',
    caution: 'caution',
} as const;

/**
 * Represents the severity level of an alert.
 * Based on the unique values observed in `data.json`.
 */
export type AlertSeverity = keyof typeof AlertSeverityObject;

export type Alert = {
    errorId: string;
    errorSeverity: AlertSeverity;
    errorCategory: string;
    errorMessage: string;
    longMessage: string;
    errorTime: number; // Milliseconds Unix timestamp
    selected: boolean;
    new: boolean;
    expanded: boolean;
};

export type Contact = {
    _id: string;
    contactId: string;
    contactStatus: string;
    contactName: number;
    contactGround: string;
    contactSatellite: string;
    contactEquipment: string;
    contactState: string;
    contactStep: string;
    contactDetail: string;
    contactBeginTimestamp: number; // Seconds Unix timestamp
    contactEndTimestamp: number; // Seconds Unix timestamp
    contactLatitude: number;
    contactLongitude: number;
    contactAzimuth: number;
    contactElevation: number;
    contactResolution: string;
    contactResolutionStatus: string;
    alerts: Alert[];
};
