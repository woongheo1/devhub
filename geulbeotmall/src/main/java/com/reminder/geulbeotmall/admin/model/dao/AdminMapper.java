package com.reminder.geulbeotmall.admin.model.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.reminder.geulbeotmall.admin.model.dto.MemberSuspDTO;
import com.reminder.geulbeotmall.admin.model.dto.SuspDTO;
import com.reminder.geulbeotmall.admin.model.dto.TrashDTO;
import com.reminder.geulbeotmall.cart.model.dto.OrderDetailDTO;
import com.reminder.geulbeotmall.member.model.dto.MemberDTO;
import com.reminder.geulbeotmall.paging.model.dto.Criteria;
import com.reminder.geulbeotmall.product.model.dto.ProductDTO;
import com.reminder.geulbeotmall.review.model.dto.ReviewDTO;
import com.reminder.geulbeotmall.upload.model.dto.DesignImageDTO;

@Mapper
public interface AdminMapper {

	List<MemberDTO> getMemberList(Criteria criteria);

	MemberDTO getMemberDetails(String memberId);
	
	List<SuspDTO> getSuspDetails(String memberId);
	
	int getSuspCount(String memberId);
	
	int getTotalNumber(Criteria criteria);

	int getRegularNumber(Criteria criteria);

	int getAdminNumber(Criteria criteria);

	int getClosedNumber(Criteria criteria);
	
	List<MemberDTO> getMemberOnly(Criteria criteria);

	List<MemberDTO> getAdminOnly(Criteria criteria);

	List<MemberSuspDTO> getClosedOnly(Criteria criteria);
	
	int updateAuth();

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

	int updateDeliveryStatus(String dlvrStatus, String orderNo);

	OrderDetailDTO getOrderDetailsByOrderNo(String orderNo);

	int updateDispatchDate(String orderNo);

	int updateDeliveryDate(String orderNo);

	int addDisplayImages(DesignImageDTO designImage);

	List<ReviewDTO> getTotalReviewPostList(Criteria criteria);
	
	List<TrashDTO> getPostsInTrash(Criteria criteria);

	int moveAPostToTrash(TrashDTO trashDTO);

	int restoreAPostFromTrash(int trashNo);

	List<Integer> getTrashItemToDelete();

	int permanentlyDeleteReviewPost(int reviewNo);

	int permanentlyDeleteFromTrash(int reviewNo);

	int getTotalOrderNumber(Criteria criteria);

	List<Map<String, Integer>> getMemberDataByDate(String range, String start, String end);

	List<Map<String, Integer>> getSalesDataByDate(String range, String start, String end);

	List<Map<ProductDTO, Integer>> getTopSalesProduct(String range, String start, String end);
}
