'use client'

export default function SubscriptionForm(){
    return(
        <section>
            <h2>Add a new Subscription</h2>
            <form onSubmit={()=>{}}>
                <label>
                    <span>Subscription Name</span>
                    <input type="text" name="name" placeholder="eg. Netflix,Spotify, AWS Hosting" required/>
                </label>
                <label>
                    <span>Category</span>
                    <select name="category">
                        {['Entertainment','Music','Software','Web Services','Health and Fitness','Others'].map((cat,catIndex)=>{
                            return(
                                <option key={catIndex}>
                                    {cat}
                                </option>
                            )
                        })}
                    </select>
                </label>

                <label>
                    <span>Cost</span>
                    <input type="number" name="cost" step="0.01" placeholder="eg. 12.00" required/>
                </label>

                <label>
                    <span>Currency</span>
                    <select name="currency">
                        {['USD','EUR','GBP','NZD','AUD','INR','Other'].map((cur,curIndex)=>{
                            return(
                                <option key={curIndex}>{cur}</option>
                            )
                        })}
                    </select>
                </label>

                <label>
                    <span>Billing Frequency</span>
                    <select name="billingFrequency">
                        {['Monthly','Yearly','Quarterly','One-Time'].map((cur,curIndex)=>{
                            return(
                                <option key={curIndex}>{cur}</option>
                            )
                        })}
                    </select>
                </label>


                <label>
                    <span>Payment Method</span>
                    <select name="paymentMethod">
                        {['Credit Card','Debit Card','PayPal','Bank Transfer','UPI','Other'].map((cur,curIndex)=>{
                            return(
                                <option key={curIndex}>{cur}</option>
                            )
                        })}
                    </select>
                </label>

                <label>
                    <span>Subscription Start Date</span>
                    <input type="date" name="startDate" required/>
                </label>

                <label>
                    <span>Status</span>
                    <select name="status">
                        {['Active','Paused','Cancelled'].map((cur,curIndex)=>{
                            return(
                                <option key={curIndex}>{cur}</option>
                            )
                        })}
                    </select>
                </label>

                <label className="fat-column">
                    <span>Notes</span>
                    <textarea name="notes" placeholder="e.g. Shared with family, includes cloud storage" />
                </label>
                <div className="fat-column form-submit-btns">
                    <button>Cancel</button>
                    <button type="submit">
                        Add Subscription
                    </button>
                </div>
            </form>
        </section>
    )
}