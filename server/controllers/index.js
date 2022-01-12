const express = require("express");
const router = express.Router();
const auth = require("./auth/accessToken");
const userRouter = require("./users/userRouter");
const reviewRouter = require("./reviews/reviewRouter");
const contentRouter = require("./contents/contentRouter");

//users
router.post("/users/signup", userRouter.signUp); // 회원가입(완료)
router.post("/users/signin", userRouter.signIn); // 로그인(완료)
router.post("/users/signout", auth.accessToken, userRouter.signOut); // 로그아웃(완료)

//oauth
router.get("/users/kakao", userRouter.kakao); //  kakao 로그인(완료)
// router.get("/users/kakaoCallback", userRouter.kakaoCallback); 
router.get("/users/google", userRouter.google); // google 로그인(완료)
// router.get("/users/googleCallback", userRouter.googleCallback);

//mypage
router.get("/users/mypage", auth.accessToken, userRouter.userInfo); // 유저정보 확인, 좋아요 누른 컨텐츠 5개, 내가쓴 리뷰글 5개(완료)
router.patch("/users/mypage", auth.accessToken, userRouter.img, userRouter.modifyUser); // 회원정보 수정(완료)
router.delete("/users/mypage", auth.accessToken, userRouter.withdrawal); // 회원탈퇴(완료)

router.get("/users/mypage/myLike", auth.accessToken, userRouter.myLike); // 내가 좋아요 누른 컨텐츠 more(완료)
router.get("/users/mypage/myReview", auth.accessToken, userRouter.myReview); // 내가쓴 리뷰글 more(완료)

//reviews(재영 진행중)
router.get("/reviews", reviewRouter.reviewList); // 리뷰 전체 불러오기
router.get("/reviews/:postId", reviewRouter.reviewRead); // 리뷰 하나 불러오기

router.get("/reviews", auth.accessToken, reviewRouter.reviewLikeG); // 사용자가 좋아요 했는지 여부
router.get("/reviews", reviewRouter.reviewCommentG); // 리뷰 댓글 불러오기

router.post("/reviews", auth.accessToken,reviewRouter.img, reviewRouter.reviewWrite); // 리뷰 작성하기
router.delete("/reviews/:postId", auth.accessToken, reviewRouter.reviewDelete); // 리뷰 삭제

router.post("/reviews/like/:postId", auth.accessToken, reviewRouter.reviewLikeC) // 리뷰에 좋아요
router.post("/reviews/comment/:postId", auth.accessToken, reviewRouter.reviewCommentC) // 리뷰에 댓글

router.delete("/reviews/like/:postId", auth.accessToken, reviewRouter.reviewLikeD); // 리뷰 좋아요 지우기
router.delete("/reviews/comment/:postId", auth.accessToken, reviewRouter.reviewCommentD); // 리뷰 댓글 지우기

//contents(세환 진행중)
router.get("/contents", contentRouter.listAll); // 컨텐츠 전체 불러오기(완료)
router.get("/contents/category/:categoryName", contentRouter.firstfilter); // 컨텐츠 카테고리 필터링(진행중)
router.get("/contents/:categoryName/:typeName/:sort", contentRouter.secondfilter); // 컨텐츠 카테고리&타입 최신 순, 좋아요 순 필터링(진행중)
router.get("/contents/:contentId", contentRouter.detail); // 컨텐츠 하나 선택
router.get("/search", contentRouter.search); // 컨텐츠 검색

module.exports = router;

//https://github.com/codestates/moongori/blob/main/server/controllers/index.js 참조
//https://github.com/codestates/DokDok-server
//https://github.com/codestates/DokDok-client