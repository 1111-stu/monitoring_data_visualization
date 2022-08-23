// element-ui按需加载
import Vue from 'vue';
import {
  Menu, Submenu, MenuItem, MenuItemGroup,Container, Header, Aside, Main, Dropdown,
  DropdownMenu,  DropdownItem, Breadcrumb,
  BreadcrumbItem, Tag,Carousel, Message, MessageBox, Button, Form, FormItem, Select, Option,
  OptionGroup, Input, Tree, Dialog, Row, Col
} from 'element-ui';

const element = {
  install: function (Vue) {
    Vue.use(Menu)
    Vue.use(Submenu)
    Vue.use(MenuItem)
    Vue.use(MenuItemGroup)
    Vue.use(Container)
    Vue.use(Header)
    Vue.use(Aside)
    Vue.use(Main)
    Vue.use(Dropdown)
    Vue.use(DropdownMenu)
    Vue.use(DropdownItem)
    Vue.use(Breadcrumb)
    Vue.use(BreadcrumbItem)
    Vue.use(Tag)
    Vue.use(Select)
    Vue.use(Option)
    Vue.use(OptionGroup)
    Vue.use(Input)
    Vue.use(Tree)
    Vue.use(Dialog)
    Vue.use(Row)
    Vue.use(Col)
    Vue.use(Form)
    Vue.use(FormItem)
    Vue.use(Button)
    Vue.use(Carousel)
  }
}
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
export default element