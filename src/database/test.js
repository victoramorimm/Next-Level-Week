const Database = require('./db');
const createProffy = require('./createProffy');

Database.then(async(db) => {
    proffyValue = {
        name: "Victor Amorim",
        avatar: "https://avatars3.githubusercontent.com/u/63806098?s=460&u=8feca71f0c0f06427657a9b1a5950ce864cf14e1&v=4",
        whatsapp: "99999-9999",
        bio: "Irei dar as melhores aulas de Geografia da sua vida, mesmo não sabendo nada sobre"
    }

    classValue = {
        subject: 1,
        cost: "20"
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to : 1220
        }
    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})


    // * = Select ALL
    const selectedProffys = await db.all("SELECT * FROM proffys");
    
    const selectClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1;
    AND class_schedule.weekday = "0"
    AND class_schedule.time_from <= "520 "
    `);

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
    `);

    console.log(selectClassesSchedules);
})