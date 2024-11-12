// 구매 버튼 클릭 시 동작
document.getElementById('purchase-btn').addEventListener('click', () => {
    alert('결제가 완료되었습니다! 인증번호를 발송했습니다.');
    document.getElementById('auth-section').classList.remove('hidden');
});

// 인증번호 입력 시 동작
document.getElementById('verification-code').addEventListener('input', (e) => {
    const code = e.target.value;
    if (code === '1234') { // 올바른 인증번호 예시
        alert('인증이 완료되었습니다!');
        document.getElementById('download-btn').classList.remove('hidden');
    }
});

// 다운로드 버튼 클릭 시 동작
document.getElementById('download-btn').addEventListener('click', () => {
    window.location.href = 'files/your-program.exe'; // 다운로드 파일 경로
});
