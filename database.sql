CREATE TABLE "tags" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL
);

CREATE TABLE "projects" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL,
    "description" varchar(2048),
    "thumbnail" varchar(2048), 
    "website" varchar(2048),
    "github" varchar(2048),
    "date_completed" date,
    "tag_id" INT REFERENCES "tags"
);

INSERT INTO "tags" ("name") 
VALUES ('React'), ('jQuery'), ('Node'), ('SQL'), ('Redux'), ('HTML');

-- insert project data
INSERT INTO "projects"("id", "name", "description", "thumbnail", "website", "github", "date_completed", "tag_id") 
VALUES(1, 'Feedback App', 'This is a multi-step form that allows users to submit feedback. 
User-submitted ratings are then stored in a database, and viewed via an admin page.', './../images/FeedbackThumbnail.png', 
'https://floating-depths-51536.herokuapp.com/#/', 'https://github.com/jamesctucker/weekend-challenge-5-feedback', '2019-01-23', 1;

INSERT INTO "projects"("id", "name", "description", "thumbnail", "website", "github", "date_completed", "tag_id") 
VALUES(2, 'Giphy Search App', 'This app was part of a group project. It enables users to search for specific gifs via tbe GIPHY api. 
Results are then rendered on the user interface, and users can then favorite whichever ones they like. Favorited gifs are displayed 
in a separate ''page'' where the user can categorize each favorited gif. All of this data is stored in a database.', './../images/GiphyThumbnail.png', 
'https://fierce-bayou-69537.herokuapp.com/', 'https://github.com/adunahee/giffers-giphy-group-project', '2019-02-01', 5;
