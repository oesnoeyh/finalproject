// 구매 버튼 클릭 시 구매 옵션 표시
document.getElementById('purchase-btn').addEventListener('click', () => {
    document.getElementById('purchase-options').classList.remove('hidden');
});

// 월별 구매 클릭 시 계좌번호 표시
document.getElementById('monthly-btn').addEventListener('click', () => {
    alert('You selected Monthly Purchase. Please transfer ₩30,000/month to the following account.');
    document.getElementById('bank-details').classList.remove('hidden');
});

// 연간 구매 클릭 시 계좌번호 표시
document.getElementById('yearly-btn').addEventListener('click', () => {
    alert('You selected Annual Purchase. Please transfer ₩25,000/month to the following account.');
    document.getElementById('bank-details').classList.remove('hidden');
});
