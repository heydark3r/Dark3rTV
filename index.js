const Discord = require("discord.js")
const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS", "GUILD_INTEGRATIONS"]
})

client.login(process.env.token)

client.on('ready', () => {
    client.user.setActivity('Dark3rTV', { type: 'WATCHING' });

    var server = client.guilds.cache.get("748109416322301964")
    server.commands.create({
        name: "topic",
        description: "Generate a random topic"
    })
})

client.on("messageCreate", (message) => {
    if (message.content == "!verify") {
        var verify = new Discord.MessageEmbed()
            .setTitle("Benvenuto su Dark3rTV")
            .setDescription("Per poter accedere al Server, devi dimostrare di essere un essere umano semplicemente facendo click sul bottone in basso. Se hai problemi con la verifica o il bot non ti verifica, apri un [Support Ticket](https://discord.com/channels/748109416322301964/993466521923883008) e indica cosa sta facendo il bot.")
            .addFields(
                {
                    name: "Prima di verificarti!",
                    value: "Assicurati di leggere le [Server Rules](https://discord.com/channels/748109416322301964/834462797186203648) per assicurarti di non infrangerle e di essere bannato. Verificando, accetti di aver letto le regole del Server e di rispettarle.",
                    inline: false
                }
            )
            .setFooter({text:"Clicca sul bottone verde \"VERIFY\" qui sotto! Questo è passaggio necessario che dobbiamo compiere per assicurarci che solo gli umani si uniscano al Server!"})
            .setImage("https://media.discordapp.net/attachments/993472231114027058/993600338689011832/Verify.png")
            .setColor("#9F92FF")

        const verifyButton = new Discord.MessageButton()
            .setStyle("SUCCESS")
            .setLabel("Verify")
            .setCustomId("clickButton0")

        const button = new Discord.MessageButton()
            .setStyle("LINK")
            .setURL("https://discord.com/channels/748109416322301964/834462797186203648")
            .setLabel("View Server Rules")

        var row1 = new Discord.MessageActionRow()
            .addComponents(verifyButton, button)

        message.channel.send({embeds: [verify], components: [row1] })
    }

    if (message.content == "!info") {
        var info = new Discord.MessageEmbed()
            .setTitle("Benvenuto su <:PurplePlanet:977977633147068516> Dark3rTV")
            .setDescription("Questo Server è completamente basato sul [Canale YouTube di DARK3R](https://www.youtube.com/channel/UCtu-OGAWhx6VcaC6vRV726w) come municipio centrale per consentire a tutti i suoi fan di interagire tra loro. \r\r Nonostante ciò, chiunque può entrare a far parte della Community e divertirsi. **Personalizza il tuo profilo del Server — Dai un'occhiata a** <#993465263158726696>")
            .setColor("#2F3136")

        const button1 = new Discord.MessageButton()
            .setStyle("LINK")
            .setURL("https://www.youtube.com/channel/UCtu-OGAWhx6VcaC6vRV726w")
            .setLabel("YouTube")
            .setEmoji("<:PurpleYouTube:977977632887025704>")

        const button2 = new Discord.MessageButton()
            .setStyle("LINK")
            .setURL("https://twitter.com/dark3r2021")
            .setLabel("Twitter")
            .setEmoji("<:PurpleTwitter:977977633184825474>")

        const button3 = new Discord.MessageButton()
            .setStyle("LINK")
            .setURL("https://dark3r.carrd.co")
            .setLabel("Hire DARK3R!")
            .setEmoji("<:PurpleLink:977977633574879313>")

        var linkRow2 = new Discord.MessageActionRow()
            .addComponents(button1, button2, button3)

        message.channel.send({embeds: [info], components: [linkRow2] })
    }

    if (message.content == "!info2") {
        var info2 = new Discord.MessageEmbed()
            .setDescription("Per ulteriori domande o per contattare DARK3R, apri un <#993466521923883008> e ti risponderemo il prima possibile.")
            .setColor("#9F92FF")
            .setFooter({text:"Usa il menù a tendina una categoria alla volta per evitare i limiti di tariffa!"})
            .addFields(
                {
                    name: "<:PurpleNetwork:977977633063194634> Quick Links",
                    value: "<:PurpleLink:977977633574879313> [dark3rtv.it](https://dark3rtv.carrd.co) \r <:PurpleTwitter:977977633184825474> [@Dark3rTV](https://twitter.com/Dark3rTV) \r <:PurpleReddit:977977633201618974> [Subreddit](https://reddit.com/r/dark3rtv) \r\r <:PurpleLink:977977633574879313> [Vote on Top.gg!](https://top.gg/servers/748109416322301964/vote)",
                    inline: true
                },
                {
                    name: "<:PurpleNetwork:977977633063194634> Information",
                    value: "<:PurpleFlag:977977632979320923> Founded: <t:1598414400:D> \r <:PurpleCrown:977977633071595540> Owner: <@709672125354606592> \r <:PurplePlanet:977977633147068516> Invite: [discord.gg/dark3rtv](https://discord.gg/8fwKnmKwms)",
                    inline: true
                }
            )

        var button4 = new Discord.MessageButton()
            .setLabel("Roles Info")
            .setStyle("SECONDARY")
            .setEmoji("<:PurplePerson:977977633189003294>")
            .setCustomId("clickButton4")

        var button5 = new Discord.MessageButton()
            .setLabel("Booster Perks")
            .setStyle("SECONDARY")
            .setEmoji("<:PurpleBooster:977977632547283055>")
            .setCustomId("clickButton5")

        var button6 = new Discord.MessageButton()
            .setLabel("Server Rules")
            .setStyle("SECONDARY")
            .setEmoji("<:PurpleBook:977977633012842556>")
            .setCustomId("clickButton6")

        var row = new Discord.MessageActionRow()
            .addComponents(button4, button5, button6)


        message.channel.send({embeds: [info2], components: [row] })
    }

    if (message.content == "!faq") {
        var faq = new Discord.MessageEmbed()
            .setTitle("Frequently Asked Questions")
            .setDescription("Seleziona la tua domanda dal menù a tendina qui sotto per ottenere una risposta! Se la tua domanda non è elencata qui, sentiti libero di chiederci in un [Ticket Support](https://discord.com/channels/748109416322301964/993466521923883008) \r\r Questa FAQ è stata aggiornata l'ultima volta <t:1656961200:R>")
            .setColor("#2F3136")

        var select = new Discord.MessageSelectMenu()
            .setCustomId("idFaq")
            .setPlaceholder("Seleziona una domanda")
            .setMinValues(1)
            .setMaxValues(1)
            .addOptions([
                {
                    label: "Come contatto DARK3R?",
                    description: "FAQ 1",
                    value: "faq1"
                },
                {
                    label: "Come posso ottenere una grafica da DARK3R?",
                    description: "FAQ 2",
                    value: "faq2"
                },
                {
                    label: "Come divento un membro dello Staff?",
                    description: "FAQ 3",
                    value: "faq3"
                },
                {
                    label: "Nitro Gratis? Dove e Come?",
                    description: "FAQ 4",
                    value: "faq4"
                },
                {
                    label: "Ho una domanda dove posso chiedere?",
                    description: "FAQ 5",
                    value: "faq5"
                },
                {
                    label: "Posso usare le grafiche di questo Server per il mio?",
                    description: "FAQ 6",
                    value: "faq6"
                },
                {
                    label: "Come faccio ad ospitare un Giveeaway?",
                    description: "FAQ 7",
                    value: "faq7"
                },
                {
                    label: "Cos'è un Helper? Come lo divento?",
                    description: "FAQ 8",
                    value: "faq8"
                },
                {
                    label: "Posso chiedere a DARK3R se mi fa una grafica?",
                    description: "FAQ9",
                    value: "faq9"
                },
                {
                    label: "Cos'è X ruolo/canale?",
                    description: "FAQ 10",
                    value: "faq10"
                }
            ])

        var row2 = new Discord.MessageActionRow()
            .addComponents(select)

        message.channel.send({embeds: [faq], components: [row2] })

    }

    if (message.content == "!age") {
        var age = new Discord.MessageEmbed()
            .setTitle("<:PurplePerson:977977633189003294> Quanti anni hai?")
            .setDescription("Per far sapere agli altri quanti anni hai, puoi scegliere la tua età qui, questo può dare una rapida visione della tue età o se vuoi semplicemente che le persone sappiano quanti anni hai.")
            .setColor("#9F92FF")

        var select_age = new Discord.MessageSelectMenu()
            .setCustomId("idAge")
            .setPlaceholder("Scegli la tua età")
            .setMinValues(1)
            .setMaxValues(1)
            .addOptions([
                {
                    label: "13-14",
                    value: "age1"
                },
                {
                    label: "15-16",
                    value: "age2"
                },
                {
                    label: "17-18",
                    value: "age3"
                },
                {
                    label: "18+",
                    value: "age4"
                }
            ])

        var row3 = new Discord.MessageActionRow()
        .addComponents(select_age)

        message.channel.send({embeds: [age], components: [row3] })
    }

    if (message.content == "!pronouns") {
        var pronouns = new Discord.MessageEmbed()
            .setTitle("<:PurpleHeart:977977632752824414> Scegli i tuoi pronomi")
            .setDescription("Per far sapere agli altri come usare i pronomi corretti quando comunicano con te, puoi personalizzare il tuo profilo di ruolo con i nostri ruoli di pronomi.")
            .setColor("#9F92FF")

        var select_pronouns = new Discord.MessageSelectMenu()
            .setCustomId("idPronouns")
            .setPlaceholder("Scegli la tua età")
            .setMinValues(1)
            .setMaxValues(1)
            .addOptions([
                {
                    label: "he/him",
                    value: "pronoun1"
                },
                {
                    label: "she/her",
                    value: "pronoun2"
                },
                {
                    label: "they/them",
                    value: "pronoun3"
                },
                {
                    label: "Any Pronouns",
                    value: "pronoun4"
                }
            ])

        var row4 = new Discord.MessageActionRow()
        .addComponents(select_pronouns)

        message.channel.send({embeds: [pronouns], components: [row4] })
    }

    if (message.content == "!notification") {
        var notification = new Discord.MessageEmbed()
            .setTitle("<:PurpleBell:977977633063194674> Notification Roles")
            .setDescription("Tutti qui sono interessati a tutti i tipi di cose. Per assicurarti di ricevere le notifiche solo per gli argomenti che desideri conoscere, puoi iscriverti a diversi tipi di notifiche. Puoi selezionare più notifiche da notificare per determinati argomenti nel Server.")
            .setColor("#9F92FF")

        var select_notification = new Discord.MessageSelectMenu()
            .setCustomId("idNotification")
            .setPlaceholder("Scegli quando vuoi essere notificato")
            .setMinValues(1)
            .setMaxValues(7)
            .addOptions([
                {
                    label: "News",
                    description: "Annunci importanti che si verificano nel Server",
                    value: "notification1"
                },
                {
                    label: "Events",
                    description: "Eventi ospitati nel Server",
                    value: "notification2"
                },
                {
                    label: "Bot Giveaways",
                    description: "Regalo di valuta BOT",
                    value: "notification3"
                },
                {
                    label: "Nitro Giveaways",
                    description: "Regalo Nitro Regular o Nitro Classic",
                    value: "notification4"
                },
                {
                    label: "Uploads",
                    description: "Sarai avvisato per gli articoli importanti di Netcord",
                    value: "notification5"
                },
                {
                    label: "Articles",
                    description: "Seleziona questo per essere avvisato di tutto ciò che accade nel Server",
                    value: "notification6"
                },
                {
                    label: "All Notifications",
                    description: "",
                    value: "notification7"
                }
            ])

        var row5 = new Discord.MessageActionRow()
        .addComponents(select_notification)

        message.channel.send({embeds: [notification], components: [row5] })
    }

    if (message.content == "!welcome") {
        message.channel.send({files: ["Dark3rTV.png"] })
    }

    if (message.content == "!selfroles") {
        message.channel.send({files: ["Self Roles.png"] })
    }
})

client.on("interactionCreate", async interaction => {
    if (!interaction.isButton()) return

    if (interaction.customId == "clickButton4") {
        var rewards = new Discord.MessageEmbed()
            .setURL("https://discord.com/channels/748109416322301964/960536198143676496")
            .setTitle("<:PurplePerson:977977633189003294> Level Rewards")
            .setDescription("Mentre parli nel Server, guadagni punti noti come XP. Più punti ottieni, più alto è il tuo livello che sblocchi e questi livelli sbloccano nuovi vantaggi che puoi utilizzare all'interno del Server.")
            .setColor("#2F3136")
            .addFields(
                {
                    name: "⁣",
                    value: "<@&993268117591560225> \r\r • Posta in <#993466901516779643> \r • Cambia Nickname \r • Aggiungere Reazioni",
                    inline: true
                },
                {
                    name: "⁣",
                    value: "<@&993268117222477854> \r\r • Idoneo per lo Staff \r • Posta in <#960536198143676496>",
                    inline: true
                },
                {
                    name: "⁣",
                    value: "<@&993268116220039250> \r\r • Custom Blanket Emoji (<:DARK3RBlanket:916816369557860382>) \r • Parla in <#993501285246574655>",
                    inline: true
                },
                {
                    name: "⁣",
                    value: "<@&993266712050933851> \r\r • Ruolo personalizzato \r • Emoji personalizzata \r • Aggiungi DARK3R come amico",
                    inline: true
                },
                {
                    name: "⁣",
                    value: "<@&993266709421101227> \r\r • Scegli il Colore del Ruolo \r • Il mio amore incondizionato per te",
                    inline: true
                }
            )

        var specials = new Discord.MessageEmbed()
            .setURL("https://discord.com/channels/748109416322301964/960536198143676496")
            .setTitle("<:PurplePlanet:977977633147068516> Special Roles")
            .setDescription("Questi ruoli sono generalmente più difficili da sbloccare e mostrano qualche segno di autorità/popolarità all'interno di Discord o della Community.")
            .setColor("#2F3136")
            .addFields(
                {
                    name: "⁣",
                    value: "<@&993266707005182053> \r\r • Per coloro che sono popolari su Internet o hanno un grande seguito al di fuori di Discord. Fornito anche ai proprietari di Server partner",
                    inline: true
                },
                {
                    name: "⁣",
                    value: "<@&916629869801111572> \r\r • Oltre 1K Iscritti \r • Oltre 100K Views \r • Deve soddisfare i criteri di qualità della Community \r • Il canale deve essere collegato all'account Discord",
                    inline: true
                },
                {
                    name: "⁣",
                    value: "<@&961989106739601449> \r\r • Regalato a chi ha donato codici Nitro da regalare nel Server",
                    inline: true
                },
                {
                    name: "⁣",
                    value: "<@&993266708255096872> \r\r • Dato agli sviluppatori di BOT per questo Server",
                    inline: true
                },
                {
                    name: "⁣",
                    value: "<@&993468682900611132> \r\r • Ruolo temporaneo assegnato per 12 ore quando voti per il nostro Server nel nostro elenco [Top.gg](https://top.gg/servers/748109416322301964/vote)",
                    inline: true
                },
                {
                    name: "⁣",
                    value: "<@&993269485500903555> \r\r • Ruolo assegnato ai proprietari di Server che implementano i [Netcord Articles](https://discord.gg/fjqtQF5UDy) sul proprio Server",
                    inline: true
                }
            )

        await interaction.reply({ embeds: [rewards], ephemeral: true })
        await interaction.followUp({ embeds: [specials], ephemeral: true })
    }

    if (interaction.customId == "clickButton5") {
        var boosterperks = new Discord.MessageEmbed()
            .setURL("https://discord.com/channels/748109416322301964/960536198143676496")
            .setTitle("<:PurpleBooster:977977632547283055> Booster Perks")
            .setDescription("Il potenziamento del Server ci aiuta enormemente, quindi apprezziamo davvero il tuo pensiero di potenziarlo. Potenziaci e come regalo da parte nostra, sbloccherai vantaggi speciali e accedi a canali nascosti.")
            .setColor("#2F3136")
            .addFields(
                {
                    name: "<:PurpleBooster:977977632547283055> Potenzia una volta, Ottieni",
                    value: "<:DR_Check:959862118264492112> Ruolo issato \r <:DR_Check:959862118264492112><:Ticket:959862117668896770> Custom Role \r <:DR_Check:959862118264492112> Attaca file in chat \r <:DR_Check:959862118264492112> Cambia Nickname \r <:DR_Check:959862118264492112> Aggiungere Reazioni \r <:DR_Check:959862118264492112> Accesso a <#993501285246574655> \r <:PNG:994191368857600050><:BlueSparkle:998160664780603423> **Ha GIF Perms, 0s Slowmode in ogni momento e la possibilità di parlare durante i blocchi!**",
                    inline: false
                },
                {
                    name: "<:PurpleBooster:977977632547283055><:PurpleBooster:977977632547283055> Potenzia due volte, Ottieni",
                    value: "« Tutto quello che ottieni prima \r <:DR_Check:959862118264492112> Ignora i Requisiti per i Giveaway \r <:DR_Check:959862118264492112><:Ticket:959862117668896770> Custom Blanket Emoji (<:DARK3RBlanket:916816369557860382>) \r <:DR_Check:959862118264492112><:Ticket:959862117668896770> Un'emoji SFW personalizzata a tua scelta",
                    inline: true
                },
                {
                    name: "<:PurpleBooster:977977632547283055><:PurpleBooster:977977632547283055><:PurpleBooster:977977632547283055> Potenzia tre volte, Ottieni",
                    value: "« Tutto quello che ottieni prima \r <:DR_Check:959862118264492112><:Ticket:959862117668896770> Custom Pet Emoji (<:DARK3RBlanket:916816369557860382>) \r <:DR_Check:959862118264492112><:Ticket:959862117668896770> DARK3R ti aggiungerà come amico",
                    inline: true
                },
                {
                    name: "⁣",
                    value: "<:Ticket:959862117668896770> Apri un [Support Ticket](https://discord.com/channels/748109416322301964/993466521923883008) per richiedere i tuoi vantaggi"
                }
            )

        interaction.reply({embeds: [boosterperks], ephemeral: true })
    }

    if (interaction.customId == "clickButton6") {
        var rules1 = new Discord.MessageEmbed()
            .setTitle("` Regola 1 ` Sii rispettoso; Ridurre al minimo la negatività")
            .setDescription("Tratta tutti come vorresti essere trattato. Non giudicare direttamente o fare commenti maleducati ad altri utenti, l'inizio di lotte e drammi inutili non sarà tollerato qui. I dibatti civili sono consentiti in una certa misura, tuttavia la creazione di risse che non porteranno da nessuna arte si tradurrà in una punizione.")
            .setColor("#2F3136")

        var rules2 = new Discord.MessageEmbed()
            .setTitle("` Regola 2 ` No contenuti Inappropriati/NSFW")
            .setDescription("Mantieni le cose appropriate per tutti. L'invio di contenuti NSFW, come messaggi, media o comportamento sessuale generale, comporterà gravi conseguenze. Anche la presenza di commenti inappropriati nel tuo profilo pubblico comporterà un ban.")
            .setColor("#2F3136")

        var rules3 = new Discord.MessageEmbed()
            .setTitle("` Regola 3 ` Nessuna Lingua Profana")
            .setDescription("Semplici imprecazioni (es. f... o s...) sono consentite in una certa misura (fare riferimento alla regola 1), ma l'uso di insulti estremi che sono razzisti, omofobi, transfobici o discriminatori comporterà ad un ban permanente.")
            .setColor("#2F3136")

        var rules4 = new Discord.MessageEmbed()
            .setTitle("` Regola 4 ` No Spamming")
            .setDescription("Lo spamming può significare molte, gli esempi sono l'invio di molti messaggi in un breve arco di tempo, l'invio di muri di testo (messaggi che occupano molto spazio sullo schermo), il concatenamento di testi, l'invio ripetitivo di allegati ecc... Può anche essere considerato spam.")
            .setColor("#2F3136")

        var rules5 = new Discord.MessageEmbed()
            .setTitle("` Regola 5 ` No Mini-Modding")
            .setDescription("Se qualcosa deve essere moderato, lascialo fare allo Staff. Non moderare il Server o fornire false informazioni agli utenti. Se ritieni che sia necessario occuparsi di qualcosa, esegui il ping di un membro dello Staff attivo o segnala il problema in #support-tickets.")
            .setColor("#2F3136")

        var rules6 = new Discord.MessageEmbed()
            .setTitle("` Regola 6 ` Imprecare")
        .   setDescription("Non chiedere Nitro, Ruoli, valuta Bot gratuiti o altro. Non distribuiamo a caso cosa gratuitamente esclusi i giveaways. Non chiedere cose gratis, continuare comporterà ad un punizione.")
            .setColor("#2F3136")

        var rules7 = new Discord.MessageEmbed()
            .setTitle("` Regola 7 ` Termini di Servizio")
            .setDescription("Rispetta i [Termini di Servizio](https://discord.com/terms) e le [Linee Guida della Community](https://discord.com/terms) di Discord. Il mancato rispetto di questa opzione potrebbe comportare l'esclusione dal Server.")
            .setColor("#2F3136")

        var rules8 = new Discord.MessageEmbed()
            .setTitle("` Regola 8 ` Far perdere tempo allo Staff")
            .setDescription("Non sprecare il tempo allo Staff, questo può includere il personale di messaggistica diretta per appellarsi contro la punizione, aprire i ticket senza motivo o infastidirlo in generale. Se hai un reclamo contro un membro dello Staff, contatta un personale di livello superiore")
            .setColor("#2F3136")

        var rules9 = new Discord.MessageEmbed()
            .setTitle("` Regola 9 ` Pubblicità")
            .setDescription("È severamente vietato promuovere i tuoi Social, Server o Creazioni al di fuori del canale <#993466901516779643>. Pubblicità in DM comporterà ad un ban istantaneo.")
            .setColor("#2F3136")

        var rules10 = new Discord.MessageEmbed()
            .setTitle("` Regola 10 ` Usa il Buon Senso")
            .setDescription("Potresti essere avvisato per alcune regole che non sono elencate qui. Non possiamo elencare tutto, ma sei un essere umano decente e non stupido e rimarrai. Scappare può comportare sansioni severe.")
            .setColor("#2F3136")

        interaction.reply({embeds: [rules1, rules2, rules3, rules4, rules5, rules6, rules7, rules8, rules9, rules10], ephemeral: true })    

    }

    if (interaction.customId == "clickButton0") {
        interaction.deferUpdate()
        interaction.member.roles.add("993268118560444518")
    }
})

client.on("interactionCreate", interaction => {
    if (!interaction.isSelectMenu()) return    

    if (interaction.customId == "idFaq"){

        switch (interaction.values[0]) {
            case "faq1": {
                var ffaq1 = new Discord.MessageEmbed()
                    .setTitle("Come contatto DARK3R?")
                    .setDescription("I messaggi diretti di DARK3R sono attualmente aperti, se per qualche motivo non sei in grado di inviargli un messaggio, apri un ticket di supporto e menzionalo mentre poni la tua domanda. \r\rAltri metodi di contatto sarebbero [@DARK3R2021](https://twitter.com/dark3r2021) o email `dark3rtv@gmail.com`")
                    .setColor("#9F92FF")

                interaction.reply({ embeds: [ffaq1], ephemeral: true })
            } break
            case "faq2": {
                var ffaq2 = new Discord.MessageEmbed()
                    .setTitle("Come posso ottenere una grafica da DARK3R?")
                    .setDescription("DARK3R non fornisce più servizi di progettazione di loghi gratuiti. Quello che hai visto era una piccola serie realizzata per avere più interazione con i membri del Server. \r\rTuttavia, DARK3R sta attualmente fornendo servizi a pagamento per Logo Design e molto altro per aggiornare il tuo server Discord su [dark3r.it](https://dark3r.carrd.co)")
                    .setColor("#9F92FF")

                interaction.reply({ embeds: [ffaq2], ephemeral: true })
            } break
            case "faq3": {
                var ffaq3 = new Discord.MessageEmbed()
                    .setTitle("Come divento un membro dello Staff?")
                    .setDescription("Ogni volta che abbiamo bisogno di nuovi membri nel nostro Staff, annunciamo l'apertura delle candidature per il nostro personale. Non sono sempre aperti, ma quando lo sono, verranno annunciati su un canale speciale **specificatamente visibile agli utenti di Livello 20+**. \r\rRicevi il ruolo **[News Ping](https://discord.com/channels/748109416322301964/993465263158726696)** per essere avvisato quando si aprono.")
                    .setColor("#9F92FF")

                interaction.reply({ embeds: [ffaq3], ephemeral: true })
            } break
            case "faq4": {
                var ffaq4 = new Discord.MessageEmbed()
                    .setTitle("Nitro Gratis? Dove e Come?")
                    .setDescription("A volte ospitiamo Nitro Giveaway. Tieni d'occhio le notifiche in <#993465768010334261>. \rAssicurati di ottenere il ruolo **[Giveaways Ping](https://discord.com/channels/748109416322301964/993465263158726696)**!")
                    .setColor("#9F92FF")

                interaction.reply({ embeds: [ffaq4], ephemeral: true })
            } break
            case "faq5": {
                var ffaq5 = new Discord.MessageEmbed()
                    .setTitle("Ho una domanda dove posso chiedere?")
                    .setDescription("Vai in <#993466521923883008> e clicca sul bottone relativo al tipo di domanda. L'apertura di un ticket senza motivo adeguato ti avviserà.")
                    .setColor("#9F92FF")

                interaction.reply({ embeds: [ffaq5], ephemeral: true })
            } break
            case "faq6": {
                var ffaq6 = new Discord.MessageEmbed()
                    .setTitle("Posso usare le grafiche di questo server per il mio?")
                    .setDescription("**Non** puoi copiare questo Server in nessun modo, figura o forma. Ciò include incorporamenti, intestazioni, banner, icone, foto del profilo e identità dei membri dello Staff. Se si scopre che i tuoi contenuti utilizzano le nostre risorse senza autorizzazione, presenteremo una richiesta di rimozione DMCA senza preavviso.")
                    .setColor("#9F92FF")

                interaction.reply({ embeds: [ffaq6], ephemeral: true })
            } break
            case "faq7": {
                var ffaq7 = new Discord.MessageEmbed()
                    .setTitle("Come faccio a ospitare un Giveaway?")
                    .setDescription("Se desideri ospitare un Nitro Giveaway su Dark3rTV, puoi aprire un Support Ticket nella categoria Giveaways/Sponsor. \r\rTuttavia, devi soddisfare il requisito di **Essere LVL 40+ e/o essere un membro affiliato questa Community. Funziona anche se riesci a convincere un membro affiliato a garantire per te.")
                    .setColor("#9F92FF")

                interaction.reply({ embeds: [ffaq7], ephemeral: true })
            } break
            case "faq8": {
                var ffaq8 = new Discord.MessageEmbed()
                    .setTitle("Cos'è un Helper? Come lo divento?")
                    .setDescription("Gli Helper sono Mini-Staff che aiutano i nuovi membri a guidare verso il Server, supportare la chat, rispondere a domande e ticket. \r\rSe sei interessato a diventare un Helper, i moduli sono sempre aperti e puoi candidarti utilizzando [questo](https://forms.gle/VxPz7RPjNgkwe29t7) link. Non ha requisiti specifici, ma preferiamo qualcuno attivo all'interno della Community.")
                    .setColor("#9F92FF")

                interaction.reply({ embeds: [ffaq8], ephemeral: true })
            } break
            case "faq9": {
                var ffaq9 = new Discord.MessageEmbed()
                    .setTitle("Posso chiedere a DARK3R se può farmi una grafica?")
                    .setDescription("Sì, DARK3R offre servizi a pagamento di alta qualità di Logo Design con animazione, Banner Design e persino configurazione completa del Server. \r\rL'elenco completo dei servizi può essere trovato sul suo sito web: [dark3r.it](https://dark3r.carrd.co)")
                    .setColor("#9F92FF")

                interaction.reply({ embeds: [ffaq9], ephemeral: true })
            } break
            case "faq10": {
                var ffaq10 = new Discord.MessageEmbed()
                    .setTitle("Cos'è X ruolo/canale?")
                    .setDescription("Per informazioni sui ruoli, fare click sul bottone \"Roles Info\" in [questo](https://discord.com/channels/748109416322301964/834462797186203648) messaggio. Per informazioni sullo scopo dei canali, leggere l'argomento del canale.")
                    .setColor("#9F92FF")

                interaction.reply({ embeds: [ffaq10], ephemeral: true })
            } break
        }
    }

    if (interaction.customId == "idAge"){
        interaction.deferUpdate()

        switch (interaction.values[0]) {
            case "age1": {
                interaction.member.roles.add("993463553845628988")
                interaction.member.roles.remove("993463551878508584")
                interaction.member.roles.remove("993463549848465418")
                interaction.member.roles.remove("993463548179120259")
            } break
            case "age2": {
                interaction.member.roles.add("993463551878508584")
                interaction.member.roles.remove("993463553845628988")
                interaction.member.roles.remove("993463549848465418")
                interaction.member.roles.remove("993463548179120259")
            } break
            case "age3": {
                interaction.member.roles.add("993463549848465418")
                interaction.member.roles.remove("993463553845628988")
                interaction.member.roles.remove("993463551878508584")
                interaction.member.roles.remove("993463548179120259")
            } break
            case "age4": {
                interaction.member.roles.add("993463548179120259")
                interaction.member.roles.remove("993463553845628988")
                interaction.member.roles.remove("993463551878508584")
                interaction.member.roles.remove("993463549848465418")
            }
        }
    }

    if (interaction.customId == "idPronouns"){
        interaction.deferUpdate()

        switch (interaction.values[0]) {
            case "pronoun1": {
                interaction.member.roles.add("993463520253444107")
                interaction.member.roles.remove("993463522660982805")
                interaction.member.roles.remove("993463524703617125")
                interaction.member.roles.remove("993463526804963368")
            } break
            case "pronoun2": {
                interaction.member.roles.add("993463522660982805")
                interaction.member.roles.remove("993463520253444107")
                interaction.member.roles.remove("993463524703617125")
                interaction.member.roles.remove("993463526804963368")
            } break
            case "pronoun3": {
                interaction.member.roles.add("993463524703617125")
                interaction.member.roles.remove("993463520253444107")
                interaction.member.roles.remove("993463522660982805")
                interaction.member.roles.remove("993463526804963368")
            } break
            case "pronoun4": {
                interaction.member.roles.add("993463526804963368")
                interaction.member.roles.remove("993463520253444107")
                interaction.member.roles.remove("993463522660982805")
                interaction.member.roles.remove("993463524703617125")

            }
        }
    }

    if (interaction.customId == "idNotification"){
        interaction.deferUpdate()

        switch (interaction.values[0]) {
            case "notification1": {
                interaction.member.roles.add("960937969697570857")
            } break
            case "notification2": {
                interaction.member.roles.add("993467178252775486")
            } break
            case "notification3": {
                interaction.member.roles.add("993467172888252466")
            } break
            case "notification4": {
                interaction.member.roles.add("993467177590067260")
            } break
            case "notification5": {
                interaction.member.roles.add("993467178886103081")
            } break
            case "notification6": {
                interaction.member.roles.add("960937973698953277")
            } break
            case "notification7": {
                interaction.member.roles.add("960937974974009385")
            }
        }
    }
})

client.on("interactionCreate", interaction => {
    if (!interaction.isCommand()) return

    if (interaction.commandName == "topic") {
        var topic1  = new Discord.MessageEmbed()
            .setAuthor({name: "Dark3rTV's Topic", iconURL: "https://images-ext-1.discordapp.net/external/xM3ZKMhrHQaU6LNKxMR-fQBbFBR-9NtB4YTNSMMXwJc/%3Fsize%3D256/https/cdn.discordapp.com/avatars/978380975753007187/813741b50506a652ce21a98a29e5b8a2.png"})
            .setTitle("Come sarebbe la tua casa ideale?")
            .setFooter({text:"Usa /topic per generare altri argomenti"})
            .setColor("#9F92FF")

    var topic2 = new Discord.MessageEmbed()
            .setAuthor({name: "Dark3rTV's Topic", iconURL: "https://images-ext-1.discordapp.net/external/xM3ZKMhrHQaU6LNKxMR-fQBbFBR-9NtB4YTNSMMXwJc/%3Fsize%3D256/https/cdn.discordapp.com/avatars/978380975753007187/813741b50506a652ce21a98a29e5b8a2.png"})
            .setTitle("In cosa ha sprecato soldi la tua scuola che non piaceva a nessuno?")
            .setFooter({text:"Usa /topic per generare altri argomenti"})
            .setColor("#9F92FF")

    var topic3 = new Discord.MessageEmbed()
            .setAuthor({name: "Dark3rTV's Topic", iconURL: "https://images-ext-1.discordapp.net/external/xM3ZKMhrHQaU6LNKxMR-fQBbFBR-9NtB4YTNSMMXwJc/%3Fsize%3D256/https/cdn.discordapp.com/avatars/978380975753007187/813741b50506a652ce21a98a29e5b8a2.png"})
            .setTitle("Quali sono i tuoi hooby?")
            .setFooter({text:"Usa /topic per generare altri argomenti"})
            .setColor("#9F92FF")

    var topic4 = new Discord.MessageEmbed()
            .setAuthor({name: "Dark3rTV's Topic", iconURL: "https://images-ext-1.discordapp.net/external/xM3ZKMhrHQaU6LNKxMR-fQBbFBR-9NtB4YTNSMMXwJc/%3Fsize%3D256/https/cdn.discordapp.com/avatars/978380975753007187/813741b50506a652ce21a98a29e5b8a2.png"})
            .setTitle("Chi è il tuo eroe?")
            .setFooter({text:"Usa /topic per generare altri argomenti"})
            .setColor("#9F92FF")

    var topic5 = new Discord.MessageEmbed()
            .setAuthor({name: "Dark3rTV's Topic", iconURL: "https://images-ext-1.discordapp.net/external/xM3ZKMhrHQaU6LNKxMR-fQBbFBR-9NtB4YTNSMMXwJc/%3Fsize%3D256/https/cdn.discordapp.com/avatars/978380975753007187/813741b50506a652ce21a98a29e5b8a2.png"})
            .setTitle("Cos'è la bella vita?")
            .setFooter({text:"Usa /topic per generare altri argomenti"})
            .setColor("#9F92FF")

    var topic6 = new Discord.MessageEmbed()
            .setAuthor({name: "Dark3rTV's Topic", iconURL: "https://images-ext-1.discordapp.net/external/xM3ZKMhrHQaU6LNKxMR-fQBbFBR-9NtB4YTNSMMXwJc/%3Fsize%3D256/https/cdn.discordapp.com/avatars/978380975753007187/813741b50506a652ce21a98a29e5b8a2.png"})
            .setTitle("Collezioni qualcosa?")
            .setFooter({text:"Usa /topic per generare altri argomenti"})
            .setColor("#9F92FF")

    var topic7 = new Discord.MessageEmbed()
            .setAuthor({name: "Dark3rTV's Topic", iconURL: "https://images-ext-1.discordapp.net/external/xM3ZKMhrHQaU6LNKxMR-fQBbFBR-9NtB4YTNSMMXwJc/%3Fsize%3D256/https/cdn.discordapp.com/avatars/978380975753007187/813741b50506a652ce21a98a29e5b8a2.png"})
            .setTitle("Qual è stato l'ultimo film che sei andato a vedere? \rCosa ne pensi?")
            .setFooter({text:"Usa /topic per generare altri argomenti"})
            .setColor("#9F92FF")

    var topic8 = new Discord.MessageEmbed()
            .setAuthor({name: "Dark3rTV's Topic", iconURL: "https://images-ext-1.discordapp.net/external/xM3ZKMhrHQaU6LNKxMR-fQBbFBR-9NtB4YTNSMMXwJc/%3Fsize%3D256/https/cdn.discordapp.com/avatars/978380975753007187/813741b50506a652ce21a98a29e5b8a2.png"})
            .setTitle("Qual'è il tuo gioco preferito?")
            .setFooter({text:"Usa /topic per generare altri argomenti"})
            .setColor("#9F92FF")

    var messaggi = [topic1, topic2, topic3, topic4, topic5, topic6, topic7, topic8]
        interaction.reply({ embeds: [messaggi[Math.floor(Math.random() * messaggi.length)]] });
    }
})

client.on("guildMemberAdd", member => {
    if (member.user.bot) return
    let embed = new Discord.MessageEmbed()
        .setAuthor({name: "DARK3R パワー#7825"})
        .setDescription(`Ciao ${member.toString()}, grazie per esserti unito a **Dark3rTV**. Speriamo che apprezzerai il tuo soggiorno con noi e troverai quello che stai cercando nel Server. Ecco alcuni link utili di cui potresti aver bisogno. \r\r**[Di' ciao!](https://discord.com/channels/748109416322301964/960536198143676496)**`)
        .setColor("#9F92FF")
        .addFields(
            {
                name: "<:PurpleNetwork:977977633063194634> Quick Links",
                value: "<:PurpleLink:977977633574879313> Server Website: [dark3rtv.it](https://dark3rtv.carrd.co) \r<:PurpleLink:977977633574879313> Subscribe: [DARK3R's YouTube](https://www.youtube.com/channel/UCtu-OGAWhx6VcaC6vRV726w) \r<:PurplePerson:977977633189003294> Help and Support: <#993466521923883008> \r<:PurpleTwitter:977977633184825474> Tweet us: [@Dark3rTV](https://twitter.com/Dark3rTV) \r\rBan Appeal: [Clicca qui!](https://forms.gle/jmU5GsiBNRgMkUNY7)",
                inline: true
            },
            {
                name: "<:PurpleNetwork:977977633063194634> Information",
                value: "<:PurplePlanet:977977633147068516> Invite: [https://discord.gg/dark3rtv](https://discord.gg/8fwKnmKwms) \r<:PurpleCrown:977977633071595540> Owner: <@709672125354606592>",
                inline: true
            },
            {
                name: "<:PurpleNetwork:977977633063194634> Contact",
                value: "Per ulteriori richieste consigliamo di **[aprire un Support Ticket](https://discord.com/channels/748109416322301964/993466521923883008)**. \r\rPer richieste commerciali, per favore `email dark3rtv@gmail.com` o DM su [Twitter](https://twitter.com/Dark3rTV).",
                inline: false
            }
        )

    member.send({ content: "Invita i tuoi amici usando https://discord.gg/8fwKnmKwms", embeds: [embed]}); 
})

client.on("messageCreate", function (message) {
    if (message.channel.id === "993466915546730556") {
        message.react("<:DR_Check:959862118264492112>")
        message.react("<:DR_Cross:959862118147051530>")
    }
})