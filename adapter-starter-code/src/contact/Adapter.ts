import { Justification } from "../entity/Justification";
import { TableData } from "../table/TableData";
import { ContactManager } from "./ContactManager";

export class Adapter implements TableData {
    private contactManager: ContactManager;

    public constructor(contactManager: ContactManager) {
        this.contactManager = contactManager;
    }

    public getColumnCount(): number {
        return 4;
    }

    public getRowCount(): number {
        return this.contactManager.getContactCount();
    }

    public getColumnSpacing(): number {
        return 3;
    }

    public getRowSpacing(): number {
        return 1;
    }

    public getHeaderUnderline(): string {
        return "-";
    }

    public getColumnHeader(col: number): string {
        if(col == 0) {
            return "firstName"
        } else if (col == 1) {
            return "lastName"
        } else if (col == 2) {
            return "phone"
        } else if (col == 3) {
            return "email"
        } else {
            return "";
        }
    }

    public getColumnWidth(col: number): number {
        return 25;
    }

    public getColumnJustification(col: number): Justification {
        return Justification.Center;
    }

    public getCellValue(row: number, col: number): string {
        const contact = this.contactManager.getContact(row);

        if(col == 0) {
            return contact.firstName;
        } else if (col == 1) {
            return contact.lastName;
        } else if (col == 2) {
            return contact.phone;
        } else if (col == 3) {
            return contact.email;
        } else {
            return "";
        }
    }
}