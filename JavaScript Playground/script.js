document.addEventListener('DOMContentLoaded', function () {
    const copyButtons = document.querySelectorAll('.copy-btn');

    copyButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            const link = this.getAttribute('data-link');
            
            navigator.clipboard.writeText(link).then(() => {
                const originalHTML = this.innerHTML;
                this.innerHTML = '<i class="fas fa-check me-2"></i>کپی شد!';
                this.classList.add('btn-success');

                setTimeout(() => {
                    this.innerHTML = originalHTML;
                    this.classList.remove('btn-success');
                }, 2000);
            }).catch(err => {
                alert('خطا در کپی: ' + err);
            });
        });
    });
});