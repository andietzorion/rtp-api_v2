const express = require("express");
const router = express.Router();

const getidController = require("../controllers/getid");
const inputCrud = require("../crud/input");
const updateCrud = require("../crud/update");
const addnewCrud = require("../crud/addnew");
const postpatternCrud = require("../crud/postpattern");
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
const getpragmaticController = require("../controllers/pragmatic");
const getreelkingdomController = require("../controllers/reelkingdom");
const getslot88Controller = require("../controllers/slot88");
const getspadegamingController = require("../controllers/spadegaming");
const gettoptrendgamingController = require("../controllers/toptrendgaming");
const getyggdrasilController = require("../controllers/yggdrasil");


// List Link Controller All
router.get("/api/add/c40c3479", addnewCrud.getAdd);
router.post("/api/postpattern", postpatternCrud.getPattern);
router.get("/api/game/detail/:id", getidController.getId);
router.get("/api/patch/972168b8", updateCrud.getUpdate);
router.post("/api/input/3c75dbb0", inputCrud.getInput);

// List Link Setiap Provider
router.get("/api/advantplay/game/", getadvantController.getAdvant);
router.get("/api/ambslot/game/", getambslotController.getAmbslot);
router.get("/api/astrotech/game/", getastrotechController.getAstrotech);
router.get("/api/betsoft/game/", getbetsoftController.getBetsoft);
router.get("/api/cq9/game/", getcq9Controller.getCq9);
router.get("/api/crowdplay/game/", getcrowdplayController.getCrowdplay);
router.get("/api/fachai/game/", getfachaiController.getFachai);
router.get("/api/fungkygames/game/", getfungkygamesController.getFungkygames);
router.get("/api/habanero/game/", gethabaneroController.getHabanero);
router.get("/api/ionslot/game/", getionslotController.getIonslot);
router.get("/api/jdb/game/", getjdbController.getJdb);
router.get("/api/jili/game/", getjiliController.getJili);
router.get("/api/joker/game/", getjokerController.getJoker);
router.get("/api/live22/game/", getlive22Controller.getLive22);
router.get("/api/microgaming/game/", getmicrogamingController.getMicrogaming);
router.get("/api/onetouch/game/", getonetouchController.getOnetouch);
router.get("/api/pgsoft/game/", getpgsoftController.getPgsoft);
router.get("/api/playandgo/game/", getplayandgoController.getPlayandgo);
router.get("/api/playstar/game/", getplaystarController.getPlaystar);
router.get("/api/playtech/game/", getplaytechController.getPlaytech);
router.get("/api/prgmtc/game/", getpragmaticController.getPragmatic);
router.get("/api/reelkingdom/game/", getreelkingdomController.getReelkingdom);
router.get("/api/slot88/game/", getslot88Controller.getSlot88);
router.get("/api/spadegaming/game/", getspadegamingController.getSpadegaming);
router.get("/api/toptrendgaming/game/", gettoptrendgamingController.getToptrendgaming);
router.get("/api/yggdrasil/game/", getyggdrasilController.getYggdrasil);


module.exports = { router };
