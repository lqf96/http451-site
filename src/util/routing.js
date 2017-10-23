import _ from "lodash";

export function hash_upgrade(router) {
    return () => {
        let current_route = router.currentRoute;
        let base = router.options.base||"/";

        if ((router.mode=="history")&&(current_route.path==base)&&(_.isEmpty(current_route.params))) {
            let match_result = current_route.hash.match(/^#!?(\/.*)$/);
            if (match_result)
                router.replace(match_result[1]);
        }
    };
}
