const FAQ = () => {
    return (
      <div className="max-w-7xl mx-auto py-16"> 
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
          What payment methods do you accept?
          </div>
          <div className="collapse-content">
            <p>We accept all major credit and debit cards, PayPal, and select digital wallets such as Apple Pay and Google Pay.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
          How long does shipping take?
          </div>
          <div className="collapse-content">
            <p>Shipping times vary by location. Typically, orders are processed within 1-2 business days, and shipping takes 3-7 business days within the United States. International shipping may take 10-15 business days.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
          Can I track my order?
          </div>
          <div className="collapse-content">
            <p>Yes, once your order is shipped, you will receive a tracking number via email to monitor its delivery status.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
          What is your return policy?
          </div>
          <div className="collapse-content">
            <p>We accept returns within 30 days of purchase, provided the item is in original condition with all packaging. Contact customer support for assistance with returns.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
          Do you offer warranty on gadgets?
          </div>
          <div className="collapse-content">
            <p>Yes, we offer a 1-year warranty on most gadgets. Please check the product page for specific warranty information</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
          How do I cancel or change my order?
          </div>
          <div className="collapse-content">
            <p>To cancel or modify an order, please contact our customer support team as soon as possible. Once an order is processed, we may not be able to make changes.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
          Is my personal information secure?
          </div>
          <div className="collapse-content">
            <p>Yes, we use industry-standard encryption to protect your data. Your privacy and security are our top priority.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
          Do you offer discounts or promotional codes?
          </div>
          <div className="collapse-content">
            <p>Yes, we often run promotions. Sign up for our newsletter or follow us on social media to stay updated on the latest discounts</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default FAQ;
  