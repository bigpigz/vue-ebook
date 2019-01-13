/**
 * Created by BigZ on 2019/1/13.
 */
import {mapGetters,mapActions} from 'vuex'


export const ebookMixin = {
    computed: {
        ...mapGetters([
            'fileName',
            'menuVisible'
        ])
    },
    methods:{
        ...mapActions([
            'setMenuVisible',
            'setFileName'
        ])
    }
}