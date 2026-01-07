import { LightningElement, track } from 'lwc';

export default class Ecom_QuoteListTest extends LightningElement {

    @track Quotes = [
        { expiresOn: '2026-12-31', quoteNumber: 'Q-1001', totalAmount: '$1,200.00', items: 5, status: 'Active', createdDate: '2026-12-31' },
        { expiresOn: '2026-01-15', quoteNumber: 'Q-1002', totalAmount: '$850.00', items: 3, status: 'Active', createdDate: '2026-01-15' },
        { expiresOn: '2026-02-28', quoteNumber: 'Q-1003', totalAmount: '$2,450.00', items: 8, status: 'Active', createdDate: '2026-02-28' },
        { expiresOn: '2026-03-31', quoteNumber: 'Q-1004', totalAmount: '$800.00', items: 6, status: 'Active', createdDate: '2026-03-31' },
        { expiresOn: '2026-04-30', quoteNumber: 'Q-1005', totalAmount: '$500.00', items: 4, status: 'Active', createdDate: '2026-04-30' },
        { expiresOn: '2026-05-31', quoteNumber: 'Q-1006', totalAmount: '$200.00', items: 5, status: 'Active', createdDate: '2026-05-31' },
        { expiresOn: '2024-06-30', quoteNumber: 'Q-1007', totalAmount: '$200.00', items: 5, status: 'Expired', createdDate: '2024-06-30' },
        { expiresOn: '2024-07-31', quoteNumber: 'Q-1008', totalAmount: '$1.00', items: 5, status: 'Expired', createdDate: '2024-07-31' },
        { expiresOn: '2024-08-31', quoteNumber: 'Q-1009', totalAmount: '23.00', items: 5, status: 'Expired', createdDate: '2024-08-31' },
        { expiresOn: '2024-09-30', quoteNumber: 'Q-1010', totalAmount: '123.00', items: 34, status: 'Expired', createdDate: '2024-09-30' },
        { expiresOn: '2024-10-31', quoteNumber: 'Q-1011', totalAmount: '111.00', items: 52, status: 'Expired', createdDate: '2024-10-31' },
        { expiresOn: '2024-11-30', quoteNumber: 'Q-1012', totalAmount: '1324.00', items: 45, status: 'Expired', createdDate: '2024-11-30' },
        { expiresOn: '2024-12-31', quoteNumber: 'Q-1013', totalAmount: '543.00', items: 23, status: 'Expired', createdDate: '2024-12-31' },
        { expiresOn: '2024-01-31', quoteNumber: 'Q-1014', totalAmount: '123.00', items: 5, status: 'Expired', createdDate: '2024-01-31' },
        { expiresOn: '2024-02-28', quoteNumber: 'Q-1015', totalAmount: '678.00', items: 12, status: 'Expired', createdDate: '2024-02-28' },
        { expiresOn: '2024-03-31', quoteNumber: 'Q-1016', totalAmount: '123.00', items: 5, status: 'Expired', createdDate: '2024-03-31' },
        { expiresOn: '2024-04-30', quoteNumber: 'Q-1017', totalAmount: '890.00', items: 7, status: 'Expired', createdDate: '2024-04-30' },
        { expiresOn: '2024-05-31', quoteNumber: 'Q-1018', totalAmount: '456.00', items: 9, status: 'Expired', createdDate: '2024-05-31' },
        { expiresOn: '2024-06-30', quoteNumber: 'Q-1019', totalAmount: '234.00', items: 11, status: 'Expired', createdDate: '2024-06-30' },
        { expiresOn: '2024-07-31', quoteNumber: 'Q-1020', totalAmount: '789.00', items: 15, status: 'Expired', createdDate: '2024-07-31' },
        { expiresOn: '2024-08-31', quoteNumber: 'Q-1021', totalAmount: '123.00', items: 5, status: 'Expired', createdDate: '2024-08-31' },
        { expiresOn: '2024-09-30', quoteNumber: 'Q-1022', totalAmount: '567.00', items: 8, status: 'Expired', createdDate: '2024-09-30' },
        { expiresOn: '2024-10-31', quoteNumber: 'Q-1023', totalAmount: '890.00', items: 10, status: 'Expired', createdDate: '2024-10-31' },
        { expiresOn: '2024-11-30', quoteNumber: 'Q-1024', totalAmount: '345.00', items: 6, status: 'Expired', createdDate: '2024-11-30' },
        { expiresOn: '2024-12-31', quoteNumber: 'Q-1025', totalAmount: '678.00', items: 14, status: 'Expired', createdDate: '2024-12-31' },
        { expiresOn: '2025-01-31', quoteNumber: 'Q-1026', totalAmount: '123.00', items: 5, status: 'Expired', createdDate: '2025-01-31' },
        { expiresOn: '2025-02-28', quoteNumber: 'Q-1027', totalAmount: '456.00', items: 9, status: 'Expired', createdDate: '2025-02-28' },
        { expiresOn: '2025-03-31', quoteNumber: 'Q-1028', totalAmount: '789.00', items: 13, status: 'Expired', createdDate: '2025-03-31' },
        { expiresOn: '2025-04-30', quoteNumber: 'Q-1029', totalAmount: '234.00', items: 7, status: 'Expired', createdDate: '2025-04-30' },
        { expiresOn: '2025-05-31', quoteNumber: 'Q-1030', totalAmount: '567.00', items: 10, status: 'Expired', createdDate: '2025-05-31' },
        { expiresOn: '2026-06-30', quoteNumber: 'Q-1031', totalAmount: '123.00', items: 5, status: 'Active', createdDate: '2026-06-30' },
        { expiresOn: '2026-07-31', quoteNumber: 'Q-1032', totalAmount: '890.00', items: 11, status: 'Active', createdDate: '2026-07-31' },
        { expiresOn: '2026-08-31', quoteNumber: 'Q-1033', totalAmount: '345.00', items: 6, status: 'Active', createdDate: '2026-08-31' },
        { expiresOn: '2026-09-30', quoteNumber: 'Q-1034', totalAmount: '678.00', items: 9, status: 'Active', createdDate: '2026-09-30' },
        { expiresOn: '2026-10-31', quoteNumber: 'Q-1035', totalAmount: '234.00', items: 8, status: 'Active', createdDate: '2026-10-31' },
        { expiresOn: '2026-11-30', quoteNumber: 'Q-1036', totalAmount: '567.00', items: 12, status: 'Active', createdDate: '2026-11-30' },
        { expiresOn: '2026-12-31', quoteNumber: 'Q-1037', totalAmount: '890.00', items: 15, status: 'Active', createdDate: '2026-12-31' },
        { expiresOn: '2025-06-30', quoteNumber: 'Q-1038', totalAmount: '123.00', items: 5, status: 'Active', createdDate: '2025-06-30' },
        { expiresOn: '2025-07-31', quoteNumber: 'Q-1039', totalAmount: '456.00', items: 8, status: 'Active', createdDate: '2025-07-31' },
        { expiresOn: '2025-08-31', quoteNumber: 'Q-1040', totalAmount: '789.00', items: 12, status: 'Active', createdDate: '2025-08-31' },
        { expiresOn: '2025-09-30', quoteNumber: 'Q-1041', totalAmount: '234.00', items: 6, status: 'Active', createdDate: '2025-09-30' },
        { expiresOn: '2025-10-31', quoteNumber: 'Q-1042', totalAmount: '567.00', items: 9, status: 'Active', createdDate: '2025-10-31' },
        { expiresOn: '2025-11-30', quoteNumber: 'Q-1043', totalAmount: '890.00', items: 14, status: 'Active', createdDate: '2025-11-30' },
        { expiresOn: '2025-12-31', quoteNumber: 'Q-1044', totalAmount: '345.00', items: 7, status: 'Active', createdDate: '2025-12-31' }
    ];

    allQuotes = [];
    quotesToDisplay = [];

    connectedCallback(){

        this.allQuotes = this.Quotes.map(q => {
            const statusClass = q.status === 'Active' ? 'slds-text-color_success' : 'slds-text-color_error';
            q = {...q,
                statusClass: statusClass
            };
            return q;
        });

        //Set default active quotes to display - 
        this.setDisplayedQuotes('active');
    }

    setDisplayedQuotes(filterType){
        this.quotesToDisplay = [];
        this.quotesToDisplay = this.allQuotes.filter(q => q.status.toLowerCase() === filterType);
    }

    handleActiveQuotes(event){
        this.setDisplayedQuotes('active');
    };

    handleExpiredQuotes(event){
        this.setDisplayedQuotes('expired');
    };

    //Pagination changes ---
    
}