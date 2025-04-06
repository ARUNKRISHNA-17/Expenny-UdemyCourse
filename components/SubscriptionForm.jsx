'use client'

import { useAuth } from "@/context/AuthContext"
import { useState } from "react"

export default function SubscriptionForm(props){
    const {closeInput,formData,handleChnageInput, handleResetForm}=props
    const {handleAddSubscriptions} = useAuth()
    

    function handleFormSubmit(e){
        e.preventDefault()//prevents the random as behaviour of reloading the webpage
        handleAddSubscriptions(formData)
        handleResetForm()
        closeInput()
    }




    return(
        <section>
            <h2>Add a new Subscription</h2>
            <form onSubmit={handleFormSubmit}>
                <label>
                    <span>Subscription Name</span>
                    <input value={formData.name} onChange={handleChnageInput} type="text" name="name" placeholder="eg. Netflix,Spotify, AWS Hosting" required/>
                </label>
                <label>
                    <span>Category</span>
                    <select value={formData.category} onChange={handleChnageInput} name="category">
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
                    <input value={formData.cost} onChange={handleChnageInput} type="number" name="cost" step="0.01" placeholder="eg. 12.00" required/>
                </label>

                <label>
                    <span>Currency</span>
                    <select value={formData.currency} onChange={handleChnageInput} name="currency">
                        {['USD','EUR','GBP','NZD','AUD','INR','Other'].map((cur,curIndex)=>{
                            return(
                                <option key={curIndex}>{cur}</option>
                            )
                        })}
                    </select>
                </label>

                <label>
                    <span>Billing Frequency</span>
                    <select value={formData.billingFrequency} onChange={handleChnageInput} name="billingFrequency">
                        {['Monthly','Yearly','Quarterly','One-Time'].map((cur,curIndex)=>{
                            return(
                                <option key={curIndex}>{cur}</option>
                            )
                        })}
                    </select>
                </label>


                <label>
                    <span>Payment Method</span>
                    <select value={formData.paymentMethod} onChange={handleChnageInput} name="paymentMethod">
                        {['Credit Card','Debit Card','PayPal','Bank Transfer','UPI','Other'].map((cur,curIndex)=>{
                            return(
                                <option key={curIndex}>{cur}</option>
                            )
                        })}
                    </select>
                </label>

                <label>
                    <span>Subscription Start Date</span>
                    <input value={formData.startDate} onChange={handleChnageInput} type="date" name="startDate" required/>
                </label>

                <label>
                    <span>Status</span>
                    <select value={formData.status} onChange={handleChnageInput} name="status">
                        {['Active','Paused','Cancelled'].map((cur,curIndex)=>{
                            return(
                                <option key={curIndex}>{cur}</option>
                            )
                        })}
                    </select>
                </label>

                <label className="fat-column">
                    <span>Notes</span>
                    <textarea value={formData.notes} onChange={handleChnageInput} name="notes" placeholder="e.g. Shared with family, includes cloud storage" />
                </label>
                <div className="fat-column form-submit-btns">
                    <button onClick={closeInput}>Cancel</button>
                    <button onSubmit={handleFormSubmit} type="submit">
                        Add Subscription
                    </button>
                </div>
            </form>
        </section>
    )
}