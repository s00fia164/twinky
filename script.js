document.addEventListener('DOMContentLoaded', () => {
    const activities = [
        {
            img: 'images/wolontariat.jpg',
            name: 'Wolontariat weekendowy w schronisku dla zwierząt',
            description: 'Pomoc w opiece nad zwierzętami w weekend.',
            points: 45
        },
        {
            img: 'images/IMG_0357.jpg',
            name: 'Pomoc w organizacji lokalnego szkolnego wydarzenia TEDx',
            description: 'Pomoc w organizacji lokalnego TEDxa w szkole.',
            points: 35
        },
        {
            img: 'images/bibl.jpg',
            name: 'Pomoc w zbieraniu funduszy',
            description: 'Pomoc w zbieraniu funduszy na odnowę starej biblioteki szkolnej.',
            points: 30
        }
    ];

    const students = [
        { name: 'Jan Kowalski', points: 100 },
        { name: 'Anna Nowak', points: 80 },
        { name: 'Piotr Wiśniewski', points: 60 },
    ];

    function renderActivities(sortBy) {
        const activityList = document.getElementById('activity-list');
        activityList.innerHTML = '';
        let sortedActivities = [...activities];
        
        if (sortBy === 'points') {
            sortedActivities.sort((a, b) => b.points - a.points);
        } else if (sortBy === 'name') {
            sortedActivities.sort((a, b) => a.name.localeCompare(b.name));
        }

        sortedActivities.forEach(activity => {
            const div = document.createElement('div');
            div.className = 'list-group-item';
            div.innerHTML = `
                <img src="${activity.img}" alt="${activity.name}">
                <div>
                    <h3>${activity.name}</h3>
                    <p>${activity.description}</p>
                    <p><strong>${activity.points} punktów</strong></p>
                    <button class="btn btn-sm btn-primary">Zgłoś się</button>
                </div>
            `;
            activityList.appendChild(div);
        });
    }

    function renderRanking() {
        const rankingList = document.getElementById('ranking-list');
        rankingList.innerHTML = '';
        
        students.sort((a, b) => b.points - a.points);

        students.forEach((student, index) => {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.innerHTML = `${index + 1}. ${student.name} - ${student.points} punktów`;
            rankingList.appendChild(li);
        });
    }

    document.getElementById('sort').addEventListener('change', (e) => {
        renderActivities(e.target.value);
    });

    renderActivities('date');
    renderRanking();
});
