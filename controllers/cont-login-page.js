/**
 * 
 */
const dbInstanciator = require('../db/db-instanciator')
const dbInterface = dbInstanciator.dbInterface;
const usersTable = 'users'
class user {
    constructor(id,
        userName,
        firstName,
        dateOfBirth,
        password,
        email,
        country,
        region,
        city,
        price,
        compagnyName,
        jobs,
        jobsApply,
        experiences,
        userReferences,
        photoAlbums,
        photos,
        skills,
        sharedSkills,
        teachSkills,
        educations,
        conversations,
        participations,
        messages,
        repMessages
    ) {
        this.id = id;
        this.userName = userName;
        this.firstName = firstName;
        this.dateOfBirth = dateOfBirth;
        this.password = password;
        this.email = email;
        this.country = country;
        this.region = region;
        this.city = city;;
        this.price = price
        this.compagnyName = compagnyName;
        this.jobs = jobs;
        this.jobsApply = jobsApply;
        this.experiences = experiences;
        this.userReferences = userReferences;
        this.photoAlbums = photoAlbums;
        this.photos = photos;
        this.skills = skills;
        this.sharedSkills = sharedSkills;
        this.teachSkills = teachSkills;
        this.educations = educations;
        this.conversations = conversations;
        this.participations = participations;
        this.messages = messages;
        this.repMessages = repMessages;
    }
}

exports.addUser = (req, res) => {

    dbInterface.insertInTable(usersTable, req.body).then((result) => {
        res.json({
            user: result
        });
    }).catch((err) => {
        res.status(503).send(err);
    });

}
exports.getUser = (req, res) => {
    dbInterface.getDataFromTableWhere(usersTable, req.body).then((result) => {
        res.json({
            user: result
        });
    }).catch((err) => {
        res.status(503).send(err);
    });

}