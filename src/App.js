import React from "react";
import Cards from "react-credit-cards";
import bank1 from "./assets/bank1.png";
import bank2 from "./assets/bank2.png";
import bank3 from "./assets/bank3.jpg";
import picture from "./assets/picture.png";
import "react-credit-cards/es/styles-compiled.css";
import "./App.css";

const Checkbox = (props) => <input type='checkbox' {...props} />;
export default class PaymentForm extends React.Component {
	state = {
		cvc: "",
		expiry: "",
		focus: "",
		name: "John Doe",
		number: "",
		postal: "",
		checked: false,
	};

	handleInputFocus = (e) => {
		this.setState({ focus: e.target.name });
	};

	handleInputChange = (e) => {
		const { name, value } = e.target;

		this.setState({ [name]: value });
	};

	handleCheckboxChange = (event) =>
		this.setState({ checked: event.target.checked });

	render() {
		return (
			<div class='flex flex-col items-center justify-center divide-y divide-white-300 px-4 w-full'>
				<div class='w-full md:w-10/12 xl:w-8/12'>
					<div class='flex justify-end items-center pt-2 px-10 space-x-10 text-sm font-semibold'>
						<div class='inline-block'>TRIPS</div>
						<div class='inline-block '>RECENTLY VIEWED</div>
						<div class='inline-block'>BOOKINGS</div>
						<div class='relative w-13 h-13 justify-start'>
							<img
								src={picture}
								alt='profile'
								class='w-10 rounded-full border border-gray-100 shadow-sm'
							/>
						</div>
					</div>

					<div className='px-10 mt-8'>
						<div
							id='PaymentForm'
							class='flex flex-col md:flex-row w-full justify-center items-center'
						>
							<div>
								<h2 class='font-semibold text-left'>Payment Information</h2>
								<p class='text-left'>Choose your method of payment.</p>
								<br />

								<Cards
									class='bg-red-400 text-left'
									cvc={this.state.cvc}
									expiry={this.state.expiry}
									focused={this.state.focus}
									name={this.state.name}
									number={this.state.number}
									postal={this.state.postal}
								/>
							</div>

							<div class='w-full flex justify-center md:justify-end'>
								<br />
								<form>
									<br />
									<div class='flex space-x-4 justify-center md:justify-end'>
										<div class='inline-block justify-items-end'>
											<img src={bank3} alt='bank3' class='w-9' />
										</div>
										<div class='inline-block items-end'>
											<img src={bank1} alt='bank1' class='w-14' />
										</div>
										<div class='inline-block items-end'>
											<img src={bank2} alt='bank2' class='w-14' />
										</div>
									</div>

									<br />

									<div class='flex space-x-4 ...'>
										<div class='flex-1'>
											<label class='text-xs'>
												Credit card Number
												<br />
												<input
													class='border py-2 px-3 bg-gray-200 w-full '
													type='tel'
													name='number'
													placeholder='Credit Card Number'
													onChange={this.handleInputChange}
													onFocus={this.handleInputFocus}
												/>
											</label>
										</div>

										<div class='flex-1'>
											<label class='text-xs'>
												Expiration Date
												<input
													class='border py-2 px-3 bg-gray-200 w-full'
													type='tel'
													name='expiry'
													placeholder='Expiry'
													onChange={this.handleInputChange}
													onFocus={this.handleInputFocus}
												/>
											</label>
										</div>
									</div>

									<br />
									<div class='flex space-x-4 ...'>
										<div class='flex-1'>
											<label class='text-xs'>
												{" "}
												Security Code
												<br />
												<input
													class='border py-2 px-3 bg-gray-200 w-full'
													type='tel'
													name='cvc'
													placeholder='CVC'
													onChange={this.handleInputChange}
													onFocus={this.handleInputFocus}
												/>
											</label>
										</div>

										<div class='flex-1'>
											<label class='text-xs'>
												{" "}
												Postal Code
												<br />
												<input
													class='border py-2 px-3 bg-gray-200 w-full'
													type='tel'
													name='post'
													placeholder='Postal Code'
													onChange={this.handleInputChange}
													onFocus={this.handleInputFocus}
												/>
											</label>
										</div>
									</div>
									<br />
									<div>
										<label>
											<Checkbox
												class='rounded-xl'
												checked={this.state.checked}
												onChange={this.handleCheckboxChange}
											/>
											<span class='px-6 text-sm'>
												Use this card for next time purchase{" "}
											</span>
										</label>
									</div>
									<br />
									<button class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-20 rounded w-full h-12'>
										Add Card
									</button>
								</form>
							</div>
						</div>
						<br />
						<div>
							<div class='grid grid-cols-1 divide-y divide-white-300'>
								<div>
									<div></div>
								</div>

								<div class='flex'>
									<div class='flex-1'>
										<br />
										<b>Subtotal</b>
									</div>

									<div class='flex-1 text-right'>
										<br />
										<b>₦2,497.00</b>
									</div>
								</div>
							</div>
							<div class='flex'>
								<div class='flex-1'>
									<b>Estimated TAX</b>
								</div>
								<div class='flex-1 text-right'>
									<b>₦119.64</b>
								</div>
							</div>

							<div class='flex'>
								<div class='flex-1'>
									<b>Promotional Code:</b> <small>Z4KXLM9A</small>
								</div>
								<div class='flex-1 text-right'>
									<b>₦-60.00</b>
								</div>
							</div>
							<br />

							<div class='grid grid-cols-1 divide-y divide-white-300'>
								<div>
									<div></div>
								</div>

								<div class='flex flex-col md:flex-row'>
									<div class='flex-1'>
										<br />
										<button class='bg-blue-500 flex flex-nowrap hover:bg-blue-700 truncate text-white text-sm font-bold py-3 px-20 rounded'>
											Complete Payment
										</button>
									</div>
									<div class='flex-1 text-center md:text-right'>
										<br />
										<b>TOTAL: ₦2556.64</b>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
