document.getElementById('purchase-btn').addEventListener('click', () => {
    alert('결제가 완료되었습니다! 인증번호를 발송했습니다.');
    document.getElementById('auth-section').classList.remove('hidden');
});

document.getElementById('verification-code').addEventListener('input', (e) => {
    const code = e.target.value;
    if (code === '1234') { // 예시: "1234"를 올바른 인증번호로 설정
        alert('인증이 완료되었습니다!');
        document.getElementById('download-btn').classList.remove('hidden');
    }
});

document.getElementById('download-btn').addEventListener('click', () => {
    window.location.href = '/path-to-your-file/your-program.exe'; // 파일 경로 설정
});
