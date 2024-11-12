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

// 인증번호 검증
document.getElementById('verify-btn').addEventListener('click', () => {
    const verificationCode = document.getElementById('verification-code').value;
    const messageElement = document.getElementById('message');

    // 올바른 인증번호 예시 (1234)
    if (verificationCode === '1234') {
        messageElement.textContent = 'Verification successful! Starting download...';
        messageElement.style.color = '#00ff00'; // 성공 메시지 색상
        messageElement.classList.remove('hidden');

        // 다운로드 실행
        setTimeout(() => {
            // 다운로드 URL로 이동
            window.location.href = 'files/your-program.exe'; // 파일 경로 수정
        }, 2000);
    } else {
        messageElement.textContent =
            'Invalid verification code. Please contact admin@example.com for support.';
        messageElement.style.color = '#ff4c4c'; // 실패 메시지 색상
        messageElement.classList.remove('hidden');
    }
});
