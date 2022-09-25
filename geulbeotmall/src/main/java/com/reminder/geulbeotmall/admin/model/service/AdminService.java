package com.reminder.geulbeotmall.admin.model.service;

import java.util.List;

import com.reminder.geulbeotmall.admin.model.dto.SuspDTO;
import com.reminder.geulbeotmall.cart.model.dto.OrderDetailDTO;
import com.reminder.geulbeotmall.member.model.dto.MemberDTO;
import com.reminder.geulbeotmall.paging.model.dto.Criteria;
import com.reminder.geulbeotmall.upload.model.dto.DesignImageDTO;

public interface AdminService {

	List<MemberDTO> getMemberList(Criteria criteria);

	MemberDTO getMemberDetails(String memberId);
	
	List<SuspDTO> getSuspDetails(String memberId);
	
	int getSuspCount(String memberId);
	
	int getTotalNumber(Criteria criteria);

	int getRegularNumber(Criteria criteria);

	int getAdminNumber(Criteria criteria);
	
	int getClosedNumber();

	List<MemberDTO> getMemberOnly(Criteria criteria);

	List<MemberDTO> getAdminOnly(Criteria criteria);

	List<MemberDTO> getClosedOnly();
	
	int searchAuthById(String memberId);

	int deleteAuthAsAdmin(String memberId);

	int insertAuthAsAdmin(String memberId);

	int updateAccSuspension(String memberId);
	
	int insertAccSuspension(String memberId, String accSuspDesc);

	int updateAccActivation(String memberId);

	List<OrderDetailDTO> getTotalOrderList(Criteria criteria);

	List<OrderDetailDTO> getPreparingOnly(Criteria criteria);

	List<OrderDetailDTO> getDeliveringOnly(Criteria criteria);

	List<OrderDetailDTO> getCompletedOnly(Criteria criteria);

	boolean updateDeliveryStatus(String dlvrStatus, String orderNo);

	OrderDetailDTO getOrderDetailsByOrderNo(String orderNo);

	int addDisplayImages(DesignImageDTO designImage);
}
