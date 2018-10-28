export interface Payment {
    id: number;
    ccLast4: number;
    ccType: string;
    ccFirstName: string;
    ccLastName: string;
    ccExpDate: string;
    customerId: number;
}
