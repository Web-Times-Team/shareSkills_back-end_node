/**
 * Data base creation schemas 
 * 
 * 
 * application configuration object
 * in production database host, user, password need to be pass, if not, server will not start
 */
const config = {};
config.mysql = {};
if (process.env.NODE_ENV === "production") {
    config.mysql.host = process.argv[2];
    config.mysql.user = process.argv[3];
    config.mysql.password = process.argv[4];
    config.mysql.database = process.argv[5];
} else {
    config.mysql.host = "localhost";
    config.mysql.user = "node";
    config.mysql.password = "nodeOneMany13";
    config.mysql.database = "EE_platform";
}


const dbTables = [{
        name: "users",
        describe: [{
                field: "id",
                type: "int",
                null: "",
                extra: "auto_increment"
            },
            {
                field: "username",
                type: "varchar(255)",
                null: "not null",
                extra: ""
            },
            {
                field: "lastname",
                type: "varchar(255)",
                null: "not null",
                extra: ""
            },
            {
                field: "firstname",
                type: "varchar(255)",
                null: "not null",
                extra: ""
            },
            {
                field: "dateOfBirth",
                type: "date",
                null: "not null",
                extra: ""
            },
            {
                field: "password",
                type: "varchar(255)",
                null: "not null",
                extra: ""
            },
            {
                field: "email",
                type: "varchar(255)",
                null: "not null",
                extra: ""
            },
            {
                field: "country",
                type: "varchar(255)",
                null: "not null",
                extra: ""
            },
            {
                field: "region",
                type: "varchar(255)",
                null: "not null",
                extra: ""
            },
            {
                field: "city",
                type: "varchar(255)",
                null: "not null",
                extra: ""
            },
            {
                field: "constraint",
                type: "pk_users_id",
                null: "",
                extra: "primary key(id)"
            }
        ]

    },
    {
        name: "sharers",
        describe: [{
                field: "id",
                type: "int",
                null: "",
                extra: ""
            },
            {
                field: "constraint",
                type: "pk_sharers_id",
                null: "",
                extra: "primary key (id)"
            },
            {
                field: "constraint",
                type: "fk_sharers_id",
                null: "",
                extra: "foreign key(id) references users(id)"
            }
        ]
    },
    {
        name: "teachers",
        describe: [{
                field: "id",
                type: "int",
                null: "",
                extra: ""
            },
            {
                field: "price",
                type: "int",
                null: "not null",
                extra: ""
            },
            {
                field: "constraint",
                type: "pk_teachers_id",
                null: "",
                extra: "primary key(id)"
            },
            {
                field: "constraint",
                type: "fk_teachers_id",
                null: "",
                extra: "foreign key(id) references users(id)"
            }
        ]
    },
    {
        name: "employers",
        describe: [{
                field: "id",
                type: "int",
                null: "",
                extra: ""
            },
            {
                field: "companyName",
                type: "varchar(255)",
                null: "not null",
                extra: ""
            },
            {
                field: "constraint",
                type: "pk_employers_id",
                null: "",
                extra: "primary key (id)"
            },
            {
                field: "constraint",
                type: "fk_employers_id",
                null: "",
                extra: "foreign key(id) references users(id)"
            }
        ]
    },
    {
        name: "jobs",
        describe: [{
                field: "id",
                type: "int",
                null: "",
                extra: "auto_increment"
            },
            {
                field: "title",
                type: "varchar(255)",
                null: "not null",
                extra: ""
            },
            {
                field: "description",
                type: "varchar(255)",
                null: "not null",
                extra: ""
            },
            {
                field: "skills",
                type: "varchar(255)",
                null: "not null",
                extra: ""
            },
            {
                field: "salary",
                type: "int",
                null: "not null",
                extra: ""
            },
            {
                field: "currency",
                type: "enum('euros', 'dollars', 'pounds')",
                null: "not null",
                extra: ""
            },
            {
                field: "constraint",
                type: "pk_jobs_id",
                null: "",
                extra: "primary key(id)"
            }
        ]
    },
    {
        name: "sharersApplys",
        describe: [{
                field: "jobId",
                type: "int",
                null: "",
                extra: ""
            },
            {
                field: "sharerId",
                type: "int",
                null: "",
                extra: ""
            },
            {
                field: "constraint",
                type: "pk_sharersApplys_jobId_sharerId",
                null: "",
                extra: "primary key(jobId, sharerId)"
            },
            {
                field: "constraint",
                type: "fk_sharersApplys_jobId",
                null: "",
                extra: "foreign key(jobId) references jobs(id)"
            },
            {
                field: "constraint",
                type: "fk_sharersApplys_sharerId",
                null: "",
                extra: "foreign key(sharerId) references sharers(id)"
            }
        ]
    },
    {
        name: "experiences",
        describe: [{
                field: "id",
                type: "int",
                null: "",
                extra: "auto_increment"
            },
            {
                field: "startDate",
                type: "date",
                null: "not null",
                extra: ""
            },
            {
                field: "endDate",
                type: "date",
                null: "not null",
                extra: ""
            },
            {
                field: "title",
                type: "varchar(255)",
                null: "not null",
                extra: ""
            },
            {
                field: "location",
                type: "varchar(255)",
                null: "not null",
                extra: ""
            },
            {
                field: "description",
                type: "varchar(255)",
                null: "not null",
                extra: ""
            },
            {
                field: "sharerId",
                type: "int",
                null: "",
                extra: ""
            },
            {
                field: "constraint",
                type: "pk_experiences_id",
                null: "",
                extra: "primary key(id)"
            },
            {
                field: "constraint",
                type: "fk_experiences_sharerId",
                null: "",
                extra: "foreign key(sharerId) references sharers(id)"
            }
        ]
    },
    {
        name: "teachersApplys",
        describe: [{
                field: "teacherId",
                type: "int",
                null: "",
                extra: ""
            },
            {
                field: "jobId",
                type: "int",
                null: "",
                extra: ""
            },
            {
                field: "constraint",
                type: "pk_teachersApplys_teacherId_jobId",
                null: "",
                extra: "primary key(teacherId, jobId)"
            },
            {
                field: "constraint",
                type: "fk_teachersApplys_teacherId",
                null: "",
                extra: "foreign key(teacherId) references teachers(id)"
            },
            {
                field: "constraint",
                type: "fk_teachersApplys_jobId",
                null: "",
                extra: "foreign key(jobId) references jobs(id)"
            }

        ]
    },
    {
        name: "userReferences",
        describe: [{
                field: "id",
                type: "int",
                null: "",
                extra: "auto_increment"
            },
            {
                field: "author",
                type: "varchar(255)",
                null: "not null",
                extra: ""
            },
            {
                field: "comment",
                type: "varchar(255)",
                null: "not null",
                extra: ""
            },
            {
                field: "sharerId",
                type: "int",
                null: "",
                extra: ""
            },
            {
                field: "constraint",
                type: "pk_references_id",
                null: "",
                extra: "primary key(id)"
            },
            {
                field: "constraint",
                type: "fk_references_sharerId",
                null: "",
                extra: "foreign key(sharerId) references sharers(id)"
            }
        ]
    },
    {
        name: "photoAlbums",
        describe: [{
                field: "id",
                type: "int",
                null: "",
                extra: "auto_increment"
            },
            {
                field: "sharerId",
                type: "int",
                null: "",
                extra: ""

            },
            {
                field: "name",
                type: "varchar(255)",
                null: "not null",
                extra: ""

            },
            {
                field: "description",
                type: "varchar(255)",
                null: "not null",
                extra: ""

            },
            {
                field: "created",
                type: "date",
                null: "not null",
                extra: ""

            },
            {
                field: "modified",
                type: "date",
                null: "not null",
                extra: ""

            },
            {
                field: "constraint",
                type: "pk_photoAlbums_id_sharerId",
                null: "",
                extra: "primary key(id, sharerId)"
            },
            {
                field: "constraint",
                type: "fk_photoAlbums_sharerId",
                null: "",
                extra: "foreign key(sharerId) references sharers (id)"
            }
        ]
    },
    {
        name: "photos",
        describe: [{
                field: "id",
                type: "int",
                null: "",
                extra: "auto_increment"
            },
            {
                field: "photoAlbumId",
                type: "int",
                null: "",
                extra: ""
            },
            {
                field: "sharerId",
                type: "int",
                null: "",
                extra: ""
            },
            {
                field: "constraint",
                type: "pk_photos_id_photoAlbumId_sharerId",
                null: "",
                extra: "primary key(id, photoAlbumId, sharerId)"
            },
            {
                field: "constraint",
                type: "fk_photos_photoAlbumId",
                null: "",
                extra: "foreign key(photoAlbumId) references photoAlbums(id)"
            },
            {
                field: "constraint",
                type: "fk_photos_sharerId",
                null: "",
                extra: "foreign key(sharerId) references photoAlbums(sharerId)"
            }
        ]
    },
    {
        name: "skills",
        describe: [{
                field: "id",
                type: "int",
                null: "",
                extra: "auto_increment"
            },
            {
                field: "name",
                type: "varchar(255)",
                null: "not null",
                extra: ""
            },
            {
                field: "level",
                type: "enum('beginner', 'intermediate', 'avanced')",
                null: "not null",
                extra: ""
            },
            {
                field: "isSearching",
                type: "enum('true', 'false')",
                null: "not null",
                extra: ""
            },
            {
                field: "constraint",
                type: "pk_skills_id",
                null: "",
                extra: "primary key(id)"
            }
        ]
    },
    {
        name: "sharedSkills",
        describe: [{
                field: "skillId",
                type: "int",
                null: "",
                extra: ""
            },
            {
                field: "sharerId",
                type: "int",
                null: "",
                extra: ""
            },
            {
                field: "constraint",
                type: "pk_sharedSkills_skillId_sharerId",
                null: "",
                extra: "primary key(skillId, sharerId)"
            },
            {
                field: "constraint",
                type: "fk_sharedSkills_skillId",
                null: "",
                extra: "foreign key(skillId) references skills (id)"
            },
            {
                field: "constraint",
                type: "fk_sharedSkills_sharerId",
                null: "",
                extra: "foreign key(sharerId) references sharers(id)"
            }
        ]
    },
    {
        name: "teachSkills",
        describe: [{
                field: "skillId",
                type: "int",
                null: "",
                extra: ""
            },
            {
                field: "teacherId",
                type: "int",
                null: "",
                extra: ""
            },
            {
                field: "constraint",
                type: "pk_teachSkills_skillId_teacherId",
                null: "",
                extra: "primary key(skillId, teacherId)"
            },
            {
                field: "constraint",
                type: "fk_teachSkills_skillId",
                null: "",
                extra: "foreign key(skillId) references skills(id)"
            },
            {
                field: "constraint",
                type: "fk_teachSkills_teacherId",
                null: "",
                extra: "foreign key(teacherId) references teachers(id)"
            }
        ]
    },
    {
        name: "educations", // Educations needs to be relie to teacher also 
        describe: [{
                field: "id",
                type: "int",
                null: "",
                extra: "auto_increment"
            },
            {
                field: "startdate",
                type: "date",
                null: "not null",
                extra: ""
            },
            {
                field: "endDate",
                type: "date",
                null: "not null",
                extra: ""
            },
            {
                field: "qualification",
                type: "varchar(255)",
                null: "",
                extra: ""
            },
            {
                field: "location",
                type: "varchar(255)",
                null: "",
                extra: ""
            },
            {
                field: "description",
                type: "varchar(255)",
                null: "",
                extra: ""
            },
            {
                field: "sharerId",
                type: "int",
                null: "",
                extra: ""
            },
            {
                field: "constraint",
                type: "pk_educations_id",
                null: "",
                extra: "primary key(id)"
            },
            {
                field: "constraint",
                type: "fk_educations_sharerId",
                null: "",
                extra: "foreign key(sharerId) references sharers(id)"
            }
        ]
    },
    {
        name: "conversations", // conversations needs to be relied between sharer, teacher, and employer 
        describe: [{
                field: "id",
                type: "int",
                null: "",
                extra: "auto_increment"
            },
            {
                field: "created",
                type: "date",
                null: "not null",
                extra: ""
            },
            {
                field: "updated",
                type: "date",
                null: "not null",
                extra: ""
            },
            {
                field: "creatorId",
                type: "int",
                null: "",
                extra: ""
            },
            {
                field: "constraint",
                type: "pk_conversations_id",
                null: "",
                extra: "primary key(id)"
            },
            {
                field: "constraint",
                type: "fk_conversations_creatorId",
                null: "",
                extra: "foreign key(creatorId) references sharers(id)"
            }
        ]
    },
    {
        name: "participations",
        describe: [{
                field: "conversationId",
                type: "int",
                null: "",
                extra: ""
            },
            {
                field: "participantId",
                type: "int",
                null: "",
                extra: ""
            },
            {
                field: "constraint",
                type: "pk_participations_conversationsId_participantId",
                null: "",
                extra: "primary key(conversationId, participantId)"
            },
            {
                field: "constraint",
                type: "fk_participations_conversationsId",
                null: "",
                extra: "foreign key(conversationId) references conversations(id)"
            },
            {
                field: "constraint",
                type: "fk_participations_participantId",
                null: "",
                extra: "foreign key(participantId) references sharers(id)"
            }
        ]
    },
    {
        name: "messages",
        describe: [{
                field: "id",
                type: "int",
                null: "",
                extra: "auto_increment"
            },
            {
                field: "conversationId",
                type: "int",
                null: "",
                extra: ""
            },
            {
                field: "content",
                type: "text",
                null: "not null",
                extra: ""
            },
            {
                field: "type",
                type: "enum('text', 'image', 'video')",
                null: "not null",
                extra: ""
            },
            {
                field: "created",
                type: "date",
                null: "not null",
                extra: ""
            },
            {
                field: "status",
                type: "enum('pending', 'send', 'received')",
                null: "not null",
                extra: ""
            },
            {
                field: "constraint",
                type: "pk_messages_id_conversationId",
                null: "",
                extra: "primary key(id, conversationId)"
            },
            {
                field: "constraint",
                type: "fk_messages_conversationId",
                null: "",
                extra: "foreign key(conversationId) references conversations(id)"
            }
        ]
    },
    {
        name: "repMessages",
        describe: [{
                field: "id",
                type: "int",
                null: "",
                extra: "auto_increment"
            },
            {
                field: "content",
                type: "text",
                null: "not null",
                extra: ""
            },
            {
                field: "type",
                type: "enum('text', 'image', 'video')",
                null: "not null",
                extra: ""
            },
            {
                field: "created",
                type: "date",
                null: "not null",
                extra: ""
            },
            {
                field: "status",
                type: "enum('pending', 'send', 'received')",
                null: "not null",
                extra: ""
            },
            {
                field: "messageId",
                type: "int",
                null: "not null",
                extra: ""
            },
            {
                field: "constraint",
                type: "pk_repMessages_id",
                null: "",
                extra: "primary key(id)"
            },
            {
                field: "constraint",
                type: "uk_repMessages_messageId",
                null: "",
                extra: "unique key(messageId)"
            },
            {
                field: "constraint",
                type: "fk_repMessages_messageId",
                null: "",
                extra: "foreign key(messageId) references messages(id)"
            }
        ]
    }
];
const connectParams = {}
exports.config = config;
exports.dbTables = dbTables;
exports.connectParams = connectParams;