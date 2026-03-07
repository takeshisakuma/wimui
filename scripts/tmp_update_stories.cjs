const fs = require('fs');

function updateStory(filePath, type) {
    let content = fs.readFileSync(filePath, 'utf8');

    if (!content.includes('useTranslation')) {
        const regex = new RegExp(`import \\{ (${type}) \\} from "@/components/${type}/${type}";`);
        content = content.replace(
            regex,
            `import { $1 } from "@/components/${type}/${type}";\nimport { useTranslation } from "react-i18next";`
        );
    }
    
    // Replace export const XYZ = { args: { size: "...", content: "...", ... } };
    const regex = /export const ([a-zA-Z0-9_]+) = \{\s*args:\s*\{([^}]*?)content:\s*(\`|"|')([^`"']*)(\`|"|')([^}]*)\},\s*\};/g;
    content = content.replace(regex, (match, name, before, q1, text, q2, after) => {
        let key = '';
        if (text === "") {
            return `export const ${name} = {
  args: {${before}content: ""${after}}
};`;
        }

        if (name.includes('ExLarge')) key = `story_${type.toLowerCase()}_exlarge`;
        else if (name.includes('Large')) key = `story_${type.toLowerCase()}_large`;
        else if (name.includes('ExSmall')) key = `story_${type.toLowerCase()}_exsmall`;
        else if (name.includes('Small')) key = `story_${type.toLowerCase()}_small`;
        else if (name.includes('Medium')) key = `story_${type.toLowerCase()}_medium`;
        else if (name.includes('Bold')) key = `story_${type.toLowerCase()}_bold`;
        else if (name.includes('Strikethrough')) key = `story_${type.toLowerCase()}_strikethrough`;
        else if (name.includes('Highlight')) key = `story_${type.toLowerCase()}_highlight`;
        
        if (key) {
            return `export const ${name} = {
  render: (args: any) => {
    const { t } = useTranslation(['docs', 'common', 'components']);
    return <${type} {...args} content={t('${key}')} />;
  },
  args: {${before}${after}}
};`;
        }
        return match;
    });

    fs.writeFileSync(filePath, content);
}

updateStory('stories/Paragraph/Paragraph.stories.tsx', 'Paragraph');
updateStory('stories/Span/Span.stories.tsx', 'Span');
console.log('Done');
