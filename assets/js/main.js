document.addEventListener('DOMContentLoaded', function(){
    const tocbox = document.querySelector('.toc-box');
    const headers = document.querySelectorAll('.subject-name');
    const contents = document.querySelectorAll('.subject, .item');

    headers.forEach((h) => {
        const tocItem = document.createElement("li");
        tocItem.id = "toc-id-" + h.textContent.trim();

        const itemLink = document.createElement("a");
        itemLink.classList.add("content-link");
        itemLink.textContent = h.textContent.trim();

        tocItem.append(itemLink);

        tocItem.addEventListener('click', function(){
            h.scrollIntoView({
                behavior: 'smooth'
            });
        });

        tocbox.append(tocItem);
    });

    const appearObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                appearObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    contents.forEach(function(c) {
        appearObserver.observe(c);
    });

    let lastActiveHeader = null;

    function updateTocHighlight() {
        const scrollPos = document.documentElement.scrollTop;
        const wh = window.innerHeight;

        let currHead = null;

        headers.forEach(function(h) {
            const headPos = h.getBoundingClientRect().top + window.scrollY - wh / 2;
            if (scrollPos > headPos) currHead = h;
        });

        if (currHead === lastActiveHeader) return;
        lastActiveHeader = currHead;

        tocbox.querySelectorAll('li').forEach(function(tocItem) {
            tocItem.classList.remove('active');
        });

        if (currHead) {
            const tocLink = document.getElementById("toc-id-" + currHead.textContent.trim());
            if (tocLink) tocLink.classList.add('active');
        }
    }

    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                updateTocHighlight();
                ticking = false;
            });
            ticking = true;
        }
    });

    updateTocHighlight();
});
