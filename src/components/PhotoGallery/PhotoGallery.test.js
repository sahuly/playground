import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import PhotoGallery from './PhotoGallery';

configure({adapter: new Adapter()});

const photoGallery = { "images" :[{ "name" :"Caption", "thumbnailURL":"https://tinyurl.com/5k4hc32n", "originalImageURL":"https://tinyurl.com/5k4hc32n", "width":"300", "height":"200", "id":"10001" }, { "name" :"Caption", "thumbnailURL":"https://tinyurl.com/2hjty98n", "originalImageURL":"https://tinyurl.com/2hjty98n", "width":"300", "height":"200", "id":"10002" }, { "name" :"Caption", "thumbnailURL":"https://tinyurl.com/mubafmcu", "originalImageURL":"https://tinyurl.com/mubafmcu", "width":"300", "height":"200", "id":"10003" }, { "name" :"Caption", "thumbnailURL":"https://tinyurl.com/ybnacry9", "originalImageURL":"https://tinyurl.com/ybnacry9", "width":"300", "height":"200", "id":"10004" }, { "name" :"Caption", "thumbnailURL":"https://tinyurl.com/w8nhkdw8", "originalImageURL":"https://tinyurl.com/w8nhkdw8", "width":"300", "height":"200", "id":"10005" }, { "name" :"Caption", "thumbnailURL":"https://tinyurl.com/yyf7h8wa", "originalImageURL":"https://tinyurl.com/yyf7h8wa", "width":"300", "height":"200", "id":"10006" }, { "name" :"Caption", "thumbnailURL":"https://tinyurl.com/xfnv4s8w", "originalImageURL":"https://tinyurl.com/xfnv4s8w", "width":"300", "height":"200", "id":"10007" }, { "name" :"Caption", "thumbnailURL":"https://tinyurl.com/6wsc2j8z", "originalImageURL":"https://tinyurl.com/6wsc2j8z", "width":"300", "height":"200", "id":"10008" }, { "name" :"Caption", "thumbnailURL":"https://tinyurl.com/27a847z3", "originalImageURL":"https://tinyurl.com/27a847z3", "width":"300", "height":"200", "id":"10009" }, { "name" :"Caption", "thumbnailURL":"https://tinyurl.com/y8rphfv2", "originalImageURL":"https://tinyurl.com/y8rphfv2", "width":"300", "height":"200", "id":"10010" }, { "name" :"Caption", "thumbnailURL":"https://tinyurl.com/8sduef6t", "originalImageURL":"https://tinyurl.com/8sduef6t", "width":"300", "height":"200", "id":"10011" }, { "name" :"Caption", "thumbnailURL":"https://tinyurl.com/2cw6xmnb", "originalImageURL":"https://tinyurl.com/2cw6xmnb", "width":"300", "height":"200", "id":"10012" },{ "name" :"Caption", "thumbnailURL":"https://tinyurl.com/4dfjfnyf", "originalImageURL":"https://tinyurl.com/4dfjfnyf", "width":"300", "height":"200", "id":"10013" }, { "name" :"Caption", "thumbnailURL":"https://tinyurl.com/55sjb2pz", "originalImageURL":"https://tinyurl.com/55sjb2pz", "width":"300", "height":"200", "id":"10014" }, { "name" :"Caption", "thumbnailURL":"https://tinyurl.com/u4f8wfd3", "originalImageURL":"https://tinyurl.com/u4f8wfd3", "width":"300", "height":"200", "id":"10015" }, { "name" :"Caption", "thumbnailURL":"https://tinyurl.com/5k4hc32n", "originalImageURL":"https://tinyurl.com/5k4hc32n", "width":"300", "height":"200", "id":"10016" }, { "name" :"Caption", "thumbnailURL":"https://tinyurl.com/2hjty98n", "originalImageURL":"https://tinyurl.com/2hjty98n", "width":"300", "height":"200", "id":"10017" }, { "name" :"Caption", "thumbnailURL":"https://tinyurl.com/mubafmcu", "originalImageURL":"https://tinyurl.com/mubafmcu", "width":"300", "height":"200", "id":"10018" }, { "name" :"Caption", "thumbnailURL":"https://tinyurl.com/y67pu54e", "originalImageURL":"https://tinyurl.com/y67pu54e", "width":"300", "height":"200", "id":"10019" }, { "name" :"Caption", "thumbnailURL":"https://tinyurl.com/w8nhkdw8", "originalImageURL":"https://tinyurl.com/w8nhkdw8", "width":"300", "height":"200", "id":"10020" }, { "name" :"Caption", "thumbnailURL":"https://tinyurl.com/yyf7h8wa", "originalImageURL":"https://tinyurl.com/yyf7h8wa", "width":"300", "height":"200", "id":"10021" }, { "name" :"Caption", "thumbnailURL":"https://tinyurl.com/xfnv4s8w", "originalImageURL":"https://tinyurl.com/xfnv4s8w", "width":"300", "height":"200", "id":"10022" }, { "name" :"Caption", "thumbnailURL":"https://tinyurl.com/6wsc2j8z", "originalImageURL":"https://tinyurl.com/6wsc2j8z", "width":"300", "height":"200", "id":"10023" }, { "name" :"Caption", "thumbnailURL":"https://tinyurl.com/27a847z3", "originalImageURL":"https://tinyurl.com/27a847z3", "width":"300", "height":"200", "id":"10024" }, { "name" :"Caption", "thumbnailURL":"https://tinyurl.com/y8rphfv2", "originalImageURL":"https://tinyurl.com/y8rphfv2", "width":"300", "height":"200", "id":"10025" }, { "name" :"Caption", "thumbnailURL":"https://tinyurl.com/8sduef6t", "originalImageURL":"https://tinyurl.com/8sduef6t", "width":"300", "height":"200", "id":"10026" }, { "name" :"Caption", "thumbnailURL":"https://tinyurl.com/2cw6xmnb", "originalImageURL":"https://tinyurl.com/2cw6xmnb", "width":"300", "height":"200", "id":"10037" },{ "name" :"Caption", "thumbnailURL":"https://tinyurl.com/4dfjfnyf", "originalImageURL":"https://tinyurl.com/4dfjfnyf", "width":"300", "height":"200", "id":"10027" }, { "name" :"Caption", "thumbnailURL":"https://tinyurl.com/55sjb2pz", "originalImageURL":"https://tinyurl.com/55sjb2pz", "width":"300", "height":"200", "id":"10028" }, { "name" :"Caption", "thumbnailURL":"https://tinyurl.com/u4f8wfd3", "originalImageURL":"https://tinyurl.com/u4f8wfd3", "width":"300", "height":"200", "id":"10029" } ] };

describe('<PhotoGallery/>', () => {
    let wrapper;
    afterEach(() => {
        if (wrapper && wrapper.length > 0) {
            wrapper.unmount();
        }
    });
  
    it('it matches correct snapshot', () => {
        wrapper = mount(<PhotoGallery data={photoGallery.images}/>);
        expect(wrapper).toMatchSnapshot();
    });
});