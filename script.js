// 페이지 로드 시 계좌번호 섹션 숨기기
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('bank-details').classList.add('hidden');
});

// 계좌번호 섹션 표시 함수
function showBankInfo(planType) {
    const bankDetails = document.getElementById('bank-details');
    const messageElement = document.getElementById('message');

    // 계좌번호 섹션 표시
    bankDetails.classList.remove('hidden');

    // 기존 메시지 초기화
    messageElement.classList.add('hidden');
    messageElement.textContent = '';

    // 요금제 타입에 따라 알림 표시
    alert(`${planType} 요금제를 선택하셨습니다. 계좌 정보를 확인하세요.`);
}

// 인증번호 확인 함수
document.getElementById('verify-btn').addEventListener('click', () => {
    const verificationCode = document.getElementById('verification-code').value;
    const messageElement = document.getElementById('message');

    // 올바른 인증번호 확인 (예: 1234)
    if (verificationCode === '1234') {
        messageElement.textContent = '인증 성공! 다운로드가 시작됩니다.';
        messageElement.style.color = '#00ff00'; // 성공 메시지 색상
        messageElement.classList.remove('hidden');

        // 다운로드 실행 (2초 후)
        setTimeout(() => {
            window.location.href = 'files/your-program.exe'; // 다운로드할 파일 경로
        }, 2000);
    } else {
        messageElement.textContent =
            '잘못된 인증번호입니다. 관리자(admin@example.com)에게 문의하세요.';
        messageElement.style.color = '#e50914'; // 오류 메시지 색상
        messageElement.classList.remove('hidden');
    }
});
