
    const slider = document.querySelector('.slider-content');
    const projects = document.querySelectorAll('.slider-content li');
    const projectWidth = projects[1].offsetWidth;
    let cont= 0;
  
    function showProject(index) {
            const next_prev = -index * projectWidth;
            slider.style.transform = `translateX(${next_prev}px)`;
    }

    function nextProject() {
        cont = (cont + 1) % projects.length;
        showProject(cont);
    }

    function prevProject() {
        cont = (cont - 1 + projects.length) % projects.length;
        showProject(cont);
    }
  
        setInterval(() => {
            nextProject()
        },5000)
        
 
    
    // Adiciona eventos aos botões (substitua pelos seus próprios elementos)
    document.getElementById('btn-next').addEventListener('click', nextProject);
    document.getElementById('btn-prev').addEventListener('click', prevProject);
    

