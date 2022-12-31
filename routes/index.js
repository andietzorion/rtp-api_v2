const express = require("express");
const router = express.Router();

const indexController = require("../controllers/index");
const getidController = require("../controllers/getid");
const postController = require("../controllers/post");
const postpatternController = require("../controllers/postpattern");
const getpragmaticController = require("../controllers/getpragmatic");
const getadvantController = require("../controllers/advantplay");
const getambslotController = require("../controllers/ambslot");
const getastrotechController = require("../controllers/astrotech");
const getbetsoftController = require("../controllers/betsoft");
const getcq9Controller = require("../controllers/cq9");
const getcrowdplayController = require("../controllers/crowdplay");
const getfachaiController = require("../controllers/fachai");
const getfungkygamesController = require("../controllers/fungkygames");
const gethabaneroController = require("../controllers/habanero");
const getionslotController = require("../controllers/ionslot");
const getjdbController = require("../controllers/jdb");
const getjiliController = require("../controllers/jili");
const getjokerController = require("../controllers/joker");
const getlive22Controller = require("../controllers/live22");
const getmicrogamingController = require("../controllers/microgaming");
const getonetouchController = require("../controllers/onetouch");
const getpgsoftController = require("../controllers/pgsoft");
const getplayandgoController = require("../controllers/playandgo");
const getplaystarController = require("../controllers/playstar");
const getplaytechController = require("../controllers/playtech");
const getreelkingdomController = require("../controllers/reelkingdom");
const getslot88Controller = require("../controllers/slot88");
const getspadegamingController = require("../controllers/spadegaming");
const gettoptrendgamingController = require("../controllers/toptrendgaming");
const getyggdrasilController = require("../controllers/yggdrasil");


// List Link Controller All
router.post("/rtp/post", postController.getPost);
router.post("/rtp/postpattern", postpatternController.getPattern);
router.get("/rtp/", indexController.getHome);
router.get("/rtp/game/detail/:id", getidController.getId);

// List Link Setiap Provider
router.get("/rtp/prgmtc/game/", getpragmaticController.getPragmatic);
router.get("/rtp/advantplay/game/", getadvantController.getAdvant);
router.get("/rtp/ambslot/game/", getambslotController.getAmbslot);
router.get("/rtp/astrotech/game/", getastrotechController.getAstrotech);
router.get("/rtp/betsoft/game/", getbetsoftController.getBetsoft);
router.get("/rtp/cq9/game/", getcq9Controller.getCq9);
router.get("/rtp/crowdplay/game/", getcrowdplayController.getCrowdplay);
router.get("/rtp/fachai/game/", getfachaiController.getFachai);
router.get("/rtp/fungkygames/game/", getfungkygamesController.getFungkygames);
router.get("/rtp/habanero/game/", gethabaneroController.getHabanero);
router.get("/rtp/ionslot/game/", getionslotController.getIonslot);
router.get("/rtp/jdb/game/", getjdbController.getJdb);
router.get("/rtp/jili/game/", getjiliController.getJili);
router.get("/rtp/joker/game/", getjokerController.getJoker);
router.get("/rtp/live22/game/", getlive22Controller.getLive22);
router.get("/rtp/microgaming/game/", getmicrogamingController.getMicrogaming);
router.get("/rtp/onetouch/game/", getonetouchController.getOnetouch);
router.get("/rtp/pgsoft/game/", getpgsoftController.getPgsoft);
router.get("/rtp/playandgo/game/", getplayandgoController.getPlayandgo);
router.get("/rtp/playstar/game/", getplaystarController.getPlaystar);
router.get("/rtp/playtech/game/", getplaytechController.getPlaytech);
router.get("/rtp/reelkingdom/game/", getreelkingdomController.getReelkingdom);
router.get("/rtp/slot88/game/", getslot88Controller.getSlot88);
router.get("/rtp/spadegaming/game/", getspadegamingController.getSpadegaming);
router.get("/rtp/toptrendgaming/game/", gettoptrendgamingController.getToptrendgaming);
router.get("/rtp/yggdrasil/game/", getyggdrasilController.getYggdrasil);


module.exports = { router };
