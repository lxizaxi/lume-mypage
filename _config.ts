import lume from "lume/mod.ts";

import nunjucks from "lume/plugins/nunjucks.ts";
import sass from "lume/plugins/sass.ts";
import prism from "lume/plugins/prism.ts";
import "npm:prismjs@1.29.0/components/prism-bash.js";
import picture from "lume/plugins/picture.ts";
import transformImages from "lume/plugins/transform_images.ts";

import jsx from "lume/plugins/jsx.ts";
import mdx from "lume/plugins/mdx.ts";


const site = lume();

site.copy("images");

site.use(nunjucks());
site.use(sass());
site.use(prism());
site.use(picture());
site.use(transformImages());

site.use(jsx());
site.use(mdx());

export default site;
