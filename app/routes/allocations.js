var AllocationsDAO = require("../data/allocations-dao").AllocationsDAO;

function AllocationsHandler(db) {
    "use strict";

    var allocationsDAO = new AllocationsDAO(db);


    this.displayAllocations = function(req, res, next) {
        var userId = req.params.userId;

        allocationsDAO.getByUserId(userId, function(err, docs) {
            if (err) return next(err);

            docs.userId = userId; //set for nav menu items

            return res.render("allocations", docs);
        });
    };
}

module.exports = AllocationsHandler;
