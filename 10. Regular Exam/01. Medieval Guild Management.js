function solve(input) {
    let n = Number(input.shift());
    let guild = {};

    // Reading the members
    for (let i = 0; i < n; i++) {
        let [name, role, skillsStr] = input[i].split(' ');
        let skills = skillsStr.split(',');
        guild[name] = {
            role: role,
            skills: new Set(skills)
        };
    }

    for (let i = n; i < input.length; i++) {
        let line = input[i];
        if (line === "End") {
            break;
        }

        let [command, name, arg1, arg2] = line.split(" / ");

        switch (command) {
            case "Perform":
                let role = arg1;
                let skill = arg2;
                if (guild[name].role === role && guild[name].skills.has(skill)) {
                    console.log(`${name} has successfully performed the skill: ${skill}!`);
                } else {
                    console.log(`${name} cannot perform the skill: ${skill}.`);
                }
                break;

            case "Reassign":
                let newRole = arg1;
                guild[name].role = newRole;
                console.log(`${name} has been reassigned to: ${newRole}`);
                break;

            case "Learn Skill":
                let newSkill = arg1;
                if (guild[name].skills.has(newSkill)) {
                    console.log(`${name} already knows the skill: ${newSkill}.`);
                } else {
                    guild[name].skills.add(newSkill);
                    console.log(`${name} has learned a new skill: ${newSkill}.`);
                }
                break;
        }
    }

    for (let [name, data] of Object.entries(guild)) {
        let sortedSkills = Array.from(data.skills).sort((a, b) => a.localeCompare(b));
        console.log(`Guild Member: ${name}, Role: ${data.role}, Skills: ${sortedSkills.join(', ')}`);
    }
}

const input = [
    "3",
    "Arthur warrior swordsmanship,shield",
    "Merlin mage fireball,teleport",
    "Gwen healer healing,alchemy",
    "Perform / Arthur / warrior / swordsmanship",
    "Perform / Merlin / warrior / fireball",
    "Learn Skill / Gwen / purification",
    "Perform / Gwen / healer / purification",
    "Reassign / Merlin / healer",
    "Perform / Merlin / healer / teleport",
    "End"
  ]
  

solve(input);

/*function solve(input) {
    const guild = {};
    
    // Read number of members
    const n = Number(input.shift());
    
    // Process each member
    for (let i = 0; i < n; i++) {
        const [name, role, ...skillsParts] = input.shift().split(' ');
        const skills = skillsParts.join(' ').split(',');
        guild[name] = {
            role,
            skills: [...skills]
        };
    }
    
    // Process commands
    let command = input.shift();
    while (command !== "End") {
        const [action, name, ...params] = command.split(' / ');
        
        switch (action) {
            case "Perform":
                const [role, skill] = params;
                const member = guild[name];
                if (member.role === role && member.skills.includes(skill)) {
                    console.log(`${name} has successfully performed the skill: ${skill}!`);
                } else {
                    console.log(`${name} cannot perform the skill: ${skill}.`);
                }
                break;
                
            case "Reassign":
                const newRole = params[0];
                guild[name].role = newRole;
                console.log(`${name} has been reassigned to: ${newRole}`);
                break;
                
            case "Learn Skill":
                const newSkill = params[0];
                if (guild[name].skills.includes(newSkill)) {
                    console.log(`${name} already knows the skill: ${newSkill}.`);
                } else {
                    guild[name].skills.push(newSkill);
                    console.log(`${name} has learned a new skill: ${newSkill}.`);
                }
                break;
        }
        
        command = input.shift();
    }
    
    // Print final guild status with proper sorting
    const sortedNames = Object.keys(guild).sort();
    for (const name of sortedNames) {
        const member = guild[name];
        const sortedSkills = member.skills.sort();
        console.log(`Guild Member: ${name}, Role: ${member.role}, Skills: ${sortedSkills.join(', ')}`);
    }
}

// Example usage:
const input = [
  "3",
  "Arthur warrior swordsmanship,shield",
  "Merlin mage fireball,teleport",
  "Gwen healer healing,alchemy",
  "Perform / Arthur / warrior / swordsmanship",
  "Perform / Merlin / warrior / fireball",
  "Learn Skill / Gwen / purification",
  "Perform / Gwen / healer / purification",
  "Reassign / Merlin / healer",
  "Perform / Merlin / healer / teleport",
  "End"
];

solve(input);
*/