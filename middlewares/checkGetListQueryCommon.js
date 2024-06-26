export function checkGetListQueryCommon(req, res, next) {
    const { sort, limit, page, keyword } = req.query;

    // sort = "name,-email"

    // validate sort
    if (sort) { // null, undefined, "", 0
        req.query.sort = {}; // add key-value: sort_field: 'asc'|'desc'
        const sortParams = sort.split(','); // ["name", "-email", "birthday"]
        for (let sortParam of sortParams) {
            let isAscending = 'asc';
            let sortName = sortParam;
            if (sortParam.startsWith('-')) {
                isAscending = 'desc';
                sortName = sortParam.slice(1);
            }
            // sortName = "name", isAscending = 'asc'
            req.query.sort[sortName] = isAscending;
            // req.query.sort = {name: 'asc', email: "desc"}
        }
    }
    else {
        req.query.sort = {
            name: 'asc'
        };
    }

    if ( typeof (limit-0) !== "number" || (limit-0) <= 0 || (limit - 0) % 1 !== 0 ){
        req.query.limit = 4
    }

    if ( typeof parseInt(page) !== "number" || parseInt(page) <= 0 || parseInt(page) % 1 !== 0 ){
        req.query.page = 1
    }


    console.log(typeof limit, limit%1)
    next();
   
 

}