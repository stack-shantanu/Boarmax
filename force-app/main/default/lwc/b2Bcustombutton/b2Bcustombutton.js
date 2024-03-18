import { LightningElement, api, wire } from 'lwc';
import updatePOField from '@salesforce/apex/UpdateOrderSummary.updatePOField';
import { CartSummaryAdapter } from 'commerce/cartApi';

export default class CustomButton extends LightningElement {
@api recordId;

    @wire(CartSummaryAdapter)
    setCartSummary({ data, error }) {
        if (data) {
            console.log("Cart Id", data);
        } else if (error) {
            console.error(error);
        }
    }

    updatePO() {
        this.recordId = '1OsDU00000004zw0AA';
        console.log(' handle update po', this.recordId);

        updatePOField({
            orderSummaryId: this.recordId
        })
        .then(() => {
            // Handle success - maybe show a success message
            console.log('PO Number updated successfully');
        })
        .catch(error => {
            // Handle error - show an error message
            console.error('Error updating PO Number:', error);
        });
    }

    handleClick() {
        console.log('got here in handle click')
        this.updatePO();
    }
}