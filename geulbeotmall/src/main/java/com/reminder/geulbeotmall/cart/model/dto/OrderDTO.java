package com.reminder.geulbeotmall.cart.model.dto;

import lombok.Data;

@Data
public class OrderDTO {

	private int orderNo;
	private int optionNo;
	private int refProdNo;
	private int orderQuantity;
	private int orderAmount;
}
