const sr=ScrollReveal({
    origin:'top',
    distance:'20px',
    duration: 1000,
    reset: true
});

const sr2=ScrollReveal({
    origin:'top',
    distance:'-200px',
    duration: 2000,
    reset: true
});
    sr2.reveal('.main1',{delay: 200});
    sr.reveal('.col-8',{delay: 1200});
    sr.reveal('.col-4',{ delay: 1400 });
