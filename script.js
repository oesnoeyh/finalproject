function showBankInfo(planType) {
    alert(`${planType} 요금제를 선택하셨습니다. 계좌 정보를 확인하세요.`);
    document.getElementById('bank-details').classList.remove('hidden');
}

// 인증번호 확인
document.getElementById('verify-btn').addEventListener('click', () => {
    const verificationCode = document.getElementById('verification-code').value;
    const messageElement = document.getElementById('message');

    if (verificationCode === '1234') {
        messageElement.textContent = '인증 성공! 다운로드가 시작됩니다.';
        messageElement.style.color = '#00ff00'; // 초록색 성공 메시지
        messageElement.classList.remove('hidden');

        // 2초 후 파일 다운로드 시작
        setTimeout(() => {
            window.location.href = 'files/your-program.exe'; // 파일 다운로드 경로
        }, 2000);
    } else {
        messageElement.textContent = '잘못된 인증번호입니다. 관리자(admin@example.com)에게 문의하세요.';
        messageElement.style.color = '#e50914'; // 빨간색 오류 메시지
        messageElement.classList.remove('hidden');
    }
});
