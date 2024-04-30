import { useSSRContext, resolveComponent, withCtx, createVNode } from 'vue';
import { ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper.a1a6add7.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_v_card = resolveComponent("v-card");
  const _component_v_expansion_panels = resolveComponent("v-expansion-panels");
  const _component_v_expansion_panel = resolveComponent("v-expansion-panel");
  _push(`<!--[--><h3 class="text-black justify-center text-center align-center font-bold text-5xl my-10" style="${ssrRenderStyle({ fontFamily: "Roboto Slab", textShadow: "3px 3px rgba(52, 211, 153)" })}"> FAQs </h3>`);
  _push(ssrRenderComponent(_component_v_card, { class: "m-15" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="m-5 text-2xl"${_scopeId}> Investing </div>`);
        _push2(ssrRenderComponent(_component_v_expansion_panels, { variant: "accordion" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_expansion_panel, {
                title: "Are the tax benefits the same with the new non-accredited vehicle and the accredited vehicles?",
                text: "The tax-deductibility of depreciation is the same for both non-accredited and accredited vehicles. Basically, depreciation shields income from taxes over the life of the real estate asset.  Of course, if the income is greater than the depreciation, taxes will be paid on the difference, but that portion of the income that is equivalent to or less than the depreciation is not taxed.  This means you might receive distributions but owe nothing immediately in taxes!  Where the non-accredited and accredited vehicles differ to investors is that accredited vehicles' income and losses are passed through to the investor, which means that some investors that meet certain IRS requirements can recognize passed-through losses on their current year tax return.  Others who do not meet those requirements will have to wait until a later year to recognize passed-through losses on their tax return.  Investors in the non-accredited vehicle will not be allocated losses individually, the vehicle itself will account for such.  This hopefully will be simpler for many investors.  Investing involves risk and may result in partial or total loss of investment.  Prospective investors should carefully consider investment objectives, risks, charges, and expenses, and should consult with a tax or legal adviser before making any investment decision."
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_expansion_panel, {
                title: "What type of tax document will I receive and when?",
                text: "Your Form 1099-DIV tax information will be provided by January 31st of the year following each taxable year.  We hope that this simplifies our portion of your tax season."
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_expansion_panel, {
                title: "What is the investment strategy?",
                text: "Our current strategy is to act conservatively.  We aim to make every sale count, and purchase with equity already in the company's books at closing.  We expect to keep costs as low as possible while maintaining high quality standards, mostly by taking on an very aggressive management workload at an extremely generous price.  The motive of this project is predominantly moral, but we'd also like to increase our purchasing power to do additional good in the future if all goes well. This project, as stated above, has moral goals.  We want to give back to the world.  Part of sustainability obviously demands profitability, but banks and insurance companies take enough from the population, we'd much rather see these profits in the hands of our friends in the form of equity capital.  If you have the disposable income, we'd love to involve you! Although our primary focus will be on sustainable workforce housing, we may invest in other types of real estate assets if the first phase isn't feasible and other attractive opportunities arise, such as retrofits, office, industrial, retail, self-storage, etc.  Any project we take on will be in the spirit of sustainability. If enough investors are involved, (100) we will operate as a REIT.  If accredited investors want to participate, we will operate an Equity Fund to begin work on a separate phase, and likely a significantly different product."
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_expansion_panel, {
                title: "What kind of returns may I expect?",
                text: "For stabilized, income-producing property investments, we target low- to mid-teens equity returns on an annualized basis over the entire life of the investment.  We may target equity returns that are higher or lower depending on the type of investment and amount of leverage utilized.  For example, if we invest in a property that requires significant repositioning through capital and marketing investments, we may forego near-term distributions to achieve a higher gain on the sale of the property in the longer term.  We target higher equity returns for these types of investments as they involve more risk.  Our targeted returns are just that, targets.  Investment involves risk and our actual returns may be higher or lower and may include a partial or total loss of your investment."
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_expansion_panel, {
                title: "How will I be notified of how my investment is doing?",
                text: "We will provide you with periodic updates on the performance of your investment, including an annual report\u037E a semi\xADannual report\u037E current event reports for specified material events within ten business days of their occurrence\u037E supplements to the offering circular if we have material information to disclose to you\u037E and other reports that we may file or furnish to the Securities and Exchange Commission (SEC) from time to time.  We will provide this information to you by posting such information on the SEC\u2019s website at www.sec.gov.  We may also provide you with other information, such as a quarterly report on the vehicle's investments, that we will uploaded to a password-protected portal, and a notification of such instances will be emailed to you."
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_expansion_panel, {
                title: "How often will I receive distributions?",
                text: "The distribution frequency is at our sole discretion, and the change in frequency can depend on many factors such as the property\u2019s cash flow level or needed capital expenditures.  Sometimes the cash flow of the property may not support a distribution.  Additionally, we may invest in a property with the plan of not paying any near-term distributions while we undertake a capital and repositioning program.  We plan to offer a window at the end of the first phase of development for investors to accept a distribution of funds in the full amount of their apportioned equity plus interest in exchange for their shares."
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_expansion_panel, {
                title: "How much of Michael's own money does he invest?",
                text: "In short, as much as I can.  Some projects will receive more direct equity investment by Strain Investment Company LLC than others."
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_expansion_panel, {
                title: "What happens if Michael dies young?",
                text: "That is a great question! We should discuss the reality of that situation. If Michael were to die, Strain Investment Company LLC and its property investments will continue to operate. Cash flow will continue to be generated and distributed to investors. We have a great team at Strain Investment Company LLC, and together, the team will continue with business as usual \u2013 maximizing the value of each property investment.  His wife would not remarry, so back off."
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_expansion_panel, {
                title: "Who can invest in our non-accredited vehicle?",
                text: "Anyone!  Well, not anyone, but we are excited to offer our an investment vehicle to both accredited AND non-accredited investors!  Our new vehicle is open to everyday investors, however, you do need to meet suitability requirements, including you can invest no more than 10% of your annual income or net worth, along with the fact that you need to be a \u201CU.S. Person\u201D not subject to backup withholding tax, such as a U.S. citizen or resident, U.S. partnership, corporation or entity, or U.S. estate or trust."
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_expansion_panel, {
                title: "What is the minimum amount I can invest?",
                text: "$1,000.  We want to give everyday investors the opportunity to invest in real estate."
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_expansion_panel, {
                title: "What documents do I need to sign and how do I do that?",
                text: "Your documents will be sent via email to the address provided to us, and they are signed electronically."
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_expansion_panel, {
                title: "Can I invest through my IRA?",
                text: "If you have an existing IRA or a 401K from a previous employer, it is likely that you will be able to self-direct all or a portion of it into our non-accredited vehicle.  Check with your current custodian to see if they will allow you to self-direct your retirement account.  If the answer is no, please contact us by email at straininvestmentscompany@gmail.com to see if we are able to work something out."
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_expansion_panel, {
                title: "How long should I expect to invest?",
                text: "We intend to scale Harvest Valley Homes up to meet it's fullest potential.  It is our intent to do so carefully, over multiple phases over the course of multiple years.  At the end of each phase, a period of time will be taken to study the successes and failures of the community in it's current state so we can better prepare for following phases.  It is in our discretion to shorten or extend the vehicle's life. The reason for this is we want to maximize the value of our real estate investments. We do not want to be forced to sell the investments when the market is bad, nor do we want to pass up the opportunity to sell investments when the market is great."
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_expansion_panel, {
                title: "Can I cancel my investment before the offering closes?",
                text: "Once you've begun the subscription process, you cannot cancel your investment electronically.  You must email us at straininvestmentscompany@gmail.com for additional assistance.  Depending on what part of the process we are in, you may not be able to cancel.  Each of your payments are non-refundable."
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_expansion_panel, {
                title: "Can I get my money back or sell my shares after the offering closes?",
                text: "Once you are invested you should be prepared to stay invested for at least ten years.  We do not offer a redemption plan because that would reduce the cash flow available for distribution to our investors who want to stay invested through the entire lifecycle of the vehicle.  Generally speaking, the units will not be readily transferable.  There is no market for our units, nor is one expected to develop.  A unitholder may sell his or her units if a willing buyer is found, but that buyer must meet all suitability standards and other requirements applicable to the original unit holder.  We will not help you find a buyer, and all transfers must be approved in writing by Strain Investment Company LLC.  The buyer and seller will need to pay a reasonable fee to cover the costs in connection with the transfer."
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_expansion_panel, {
                title: "What type of fees do you charge?",
                text: "Management Agreements have not been established at this time, however, we are currently asking for compensation to cover our living and operating expenses - which are expected to be minimal, in addition to 4% Preferred Returns at the end of each phase.  We are staking almost all of our time and efforts on success.  We reserve the right to retain up to 10% of the profits of each phase prior to distribution but after the window for investors to accept or roll-over their distributions, for use as capital for following phases and projects."
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_expansion_panel, {
                title: "Is there risk involved?",
                text: "All investments involve risk.  We do not guarantee that you will earn our targeted returns.  There are many factors that can impact the performance of your investment, many of which are not under our control.  Please keep in mind, investing involves risk and may result in partial or total loss of your investment.  Prospective investors should carefully consider investment objectives, risks, charges, and expenses, and should consult with a tax or legal adviser before making any investment decision.  We do believe that investing in private real estate poses less risk than many other types of investments.  Private real estate has historically been less volatile than the stock market, and properties generally appreciate over time as inflation tends to push rents up.  Additionally, we conduct extensive research and due diligence on every property investment and have a high degree of conviction that our risk is balanced with our targeted returns.  Michael personally believes in the potential return of each of our investments.  During Michael's real estate career, he has never lost money with a real estate investment."
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_expansion_panel, {
                  title: "Are the tax benefits the same with the new non-accredited vehicle and the accredited vehicles?",
                  text: "The tax-deductibility of depreciation is the same for both non-accredited and accredited vehicles. Basically, depreciation shields income from taxes over the life of the real estate asset.  Of course, if the income is greater than the depreciation, taxes will be paid on the difference, but that portion of the income that is equivalent to or less than the depreciation is not taxed.  This means you might receive distributions but owe nothing immediately in taxes!  Where the non-accredited and accredited vehicles differ to investors is that accredited vehicles' income and losses are passed through to the investor, which means that some investors that meet certain IRS requirements can recognize passed-through losses on their current year tax return.  Others who do not meet those requirements will have to wait until a later year to recognize passed-through losses on their tax return.  Investors in the non-accredited vehicle will not be allocated losses individually, the vehicle itself will account for such.  This hopefully will be simpler for many investors.  Investing involves risk and may result in partial or total loss of investment.  Prospective investors should carefully consider investment objectives, risks, charges, and expenses, and should consult with a tax or legal adviser before making any investment decision."
                }),
                createVNode(_component_v_expansion_panel, {
                  title: "What type of tax document will I receive and when?",
                  text: "Your Form 1099-DIV tax information will be provided by January 31st of the year following each taxable year.  We hope that this simplifies our portion of your tax season."
                }),
                createVNode(_component_v_expansion_panel, {
                  title: "What is the investment strategy?",
                  text: "Our current strategy is to act conservatively.  We aim to make every sale count, and purchase with equity already in the company's books at closing.  We expect to keep costs as low as possible while maintaining high quality standards, mostly by taking on an very aggressive management workload at an extremely generous price.  The motive of this project is predominantly moral, but we'd also like to increase our purchasing power to do additional good in the future if all goes well. This project, as stated above, has moral goals.  We want to give back to the world.  Part of sustainability obviously demands profitability, but banks and insurance companies take enough from the population, we'd much rather see these profits in the hands of our friends in the form of equity capital.  If you have the disposable income, we'd love to involve you! Although our primary focus will be on sustainable workforce housing, we may invest in other types of real estate assets if the first phase isn't feasible and other attractive opportunities arise, such as retrofits, office, industrial, retail, self-storage, etc.  Any project we take on will be in the spirit of sustainability. If enough investors are involved, (100) we will operate as a REIT.  If accredited investors want to participate, we will operate an Equity Fund to begin work on a separate phase, and likely a significantly different product."
                }),
                createVNode(_component_v_expansion_panel, {
                  title: "What kind of returns may I expect?",
                  text: "For stabilized, income-producing property investments, we target low- to mid-teens equity returns on an annualized basis over the entire life of the investment.  We may target equity returns that are higher or lower depending on the type of investment and amount of leverage utilized.  For example, if we invest in a property that requires significant repositioning through capital and marketing investments, we may forego near-term distributions to achieve a higher gain on the sale of the property in the longer term.  We target higher equity returns for these types of investments as they involve more risk.  Our targeted returns are just that, targets.  Investment involves risk and our actual returns may be higher or lower and may include a partial or total loss of your investment."
                }),
                createVNode(_component_v_expansion_panel, {
                  title: "How will I be notified of how my investment is doing?",
                  text: "We will provide you with periodic updates on the performance of your investment, including an annual report\u037E a semi\xADannual report\u037E current event reports for specified material events within ten business days of their occurrence\u037E supplements to the offering circular if we have material information to disclose to you\u037E and other reports that we may file or furnish to the Securities and Exchange Commission (SEC) from time to time.  We will provide this information to you by posting such information on the SEC\u2019s website at www.sec.gov.  We may also provide you with other information, such as a quarterly report on the vehicle's investments, that we will uploaded to a password-protected portal, and a notification of such instances will be emailed to you."
                }),
                createVNode(_component_v_expansion_panel, {
                  title: "How often will I receive distributions?",
                  text: "The distribution frequency is at our sole discretion, and the change in frequency can depend on many factors such as the property\u2019s cash flow level or needed capital expenditures.  Sometimes the cash flow of the property may not support a distribution.  Additionally, we may invest in a property with the plan of not paying any near-term distributions while we undertake a capital and repositioning program.  We plan to offer a window at the end of the first phase of development for investors to accept a distribution of funds in the full amount of their apportioned equity plus interest in exchange for their shares."
                }),
                createVNode(_component_v_expansion_panel, {
                  title: "How much of Michael's own money does he invest?",
                  text: "In short, as much as I can.  Some projects will receive more direct equity investment by Strain Investment Company LLC than others."
                }),
                createVNode(_component_v_expansion_panel, {
                  title: "What happens if Michael dies young?",
                  text: "That is a great question! We should discuss the reality of that situation. If Michael were to die, Strain Investment Company LLC and its property investments will continue to operate. Cash flow will continue to be generated and distributed to investors. We have a great team at Strain Investment Company LLC, and together, the team will continue with business as usual \u2013 maximizing the value of each property investment.  His wife would not remarry, so back off."
                }),
                createVNode(_component_v_expansion_panel, {
                  title: "Who can invest in our non-accredited vehicle?",
                  text: "Anyone!  Well, not anyone, but we are excited to offer our an investment vehicle to both accredited AND non-accredited investors!  Our new vehicle is open to everyday investors, however, you do need to meet suitability requirements, including you can invest no more than 10% of your annual income or net worth, along with the fact that you need to be a \u201CU.S. Person\u201D not subject to backup withholding tax, such as a U.S. citizen or resident, U.S. partnership, corporation or entity, or U.S. estate or trust."
                }),
                createVNode(_component_v_expansion_panel, {
                  title: "What is the minimum amount I can invest?",
                  text: "$1,000.  We want to give everyday investors the opportunity to invest in real estate."
                }),
                createVNode(_component_v_expansion_panel, {
                  title: "What documents do I need to sign and how do I do that?",
                  text: "Your documents will be sent via email to the address provided to us, and they are signed electronically."
                }),
                createVNode(_component_v_expansion_panel, {
                  title: "Can I invest through my IRA?",
                  text: "If you have an existing IRA or a 401K from a previous employer, it is likely that you will be able to self-direct all or a portion of it into our non-accredited vehicle.  Check with your current custodian to see if they will allow you to self-direct your retirement account.  If the answer is no, please contact us by email at straininvestmentscompany@gmail.com to see if we are able to work something out."
                }),
                createVNode(_component_v_expansion_panel, {
                  title: "How long should I expect to invest?",
                  text: "We intend to scale Harvest Valley Homes up to meet it's fullest potential.  It is our intent to do so carefully, over multiple phases over the course of multiple years.  At the end of each phase, a period of time will be taken to study the successes and failures of the community in it's current state so we can better prepare for following phases.  It is in our discretion to shorten or extend the vehicle's life. The reason for this is we want to maximize the value of our real estate investments. We do not want to be forced to sell the investments when the market is bad, nor do we want to pass up the opportunity to sell investments when the market is great."
                }),
                createVNode(_component_v_expansion_panel, {
                  title: "Can I cancel my investment before the offering closes?",
                  text: "Once you've begun the subscription process, you cannot cancel your investment electronically.  You must email us at straininvestmentscompany@gmail.com for additional assistance.  Depending on what part of the process we are in, you may not be able to cancel.  Each of your payments are non-refundable."
                }),
                createVNode(_component_v_expansion_panel, {
                  title: "Can I get my money back or sell my shares after the offering closes?",
                  text: "Once you are invested you should be prepared to stay invested for at least ten years.  We do not offer a redemption plan because that would reduce the cash flow available for distribution to our investors who want to stay invested through the entire lifecycle of the vehicle.  Generally speaking, the units will not be readily transferable.  There is no market for our units, nor is one expected to develop.  A unitholder may sell his or her units if a willing buyer is found, but that buyer must meet all suitability standards and other requirements applicable to the original unit holder.  We will not help you find a buyer, and all transfers must be approved in writing by Strain Investment Company LLC.  The buyer and seller will need to pay a reasonable fee to cover the costs in connection with the transfer."
                }),
                createVNode(_component_v_expansion_panel, {
                  title: "What type of fees do you charge?",
                  text: "Management Agreements have not been established at this time, however, we are currently asking for compensation to cover our living and operating expenses - which are expected to be minimal, in addition to 4% Preferred Returns at the end of each phase.  We are staking almost all of our time and efforts on success.  We reserve the right to retain up to 10% of the profits of each phase prior to distribution but after the window for investors to accept or roll-over their distributions, for use as capital for following phases and projects."
                }),
                createVNode(_component_v_expansion_panel, {
                  title: "Is there risk involved?",
                  text: "All investments involve risk.  We do not guarantee that you will earn our targeted returns.  There are many factors that can impact the performance of your investment, many of which are not under our control.  Please keep in mind, investing involves risk and may result in partial or total loss of your investment.  Prospective investors should carefully consider investment objectives, risks, charges, and expenses, and should consult with a tax or legal adviser before making any investment decision.  We do believe that investing in private real estate poses less risk than many other types of investments.  Private real estate has historically been less volatile than the stock market, and properties generally appreciate over time as inflation tends to push rents up.  Additionally, we conduct extensive research and due diligence on every property investment and have a high degree of conviction that our risk is balanced with our targeted returns.  Michael personally believes in the potential return of each of our investments.  During Michael's real estate career, he has never lost money with a real estate investment."
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode("div", { class: "m-5 text-2xl" }, " Investing "),
          createVNode(_component_v_expansion_panels, { variant: "accordion" }, {
            default: withCtx(() => [
              createVNode(_component_v_expansion_panel, {
                title: "Are the tax benefits the same with the new non-accredited vehicle and the accredited vehicles?",
                text: "The tax-deductibility of depreciation is the same for both non-accredited and accredited vehicles. Basically, depreciation shields income from taxes over the life of the real estate asset.  Of course, if the income is greater than the depreciation, taxes will be paid on the difference, but that portion of the income that is equivalent to or less than the depreciation is not taxed.  This means you might receive distributions but owe nothing immediately in taxes!  Where the non-accredited and accredited vehicles differ to investors is that accredited vehicles' income and losses are passed through to the investor, which means that some investors that meet certain IRS requirements can recognize passed-through losses on their current year tax return.  Others who do not meet those requirements will have to wait until a later year to recognize passed-through losses on their tax return.  Investors in the non-accredited vehicle will not be allocated losses individually, the vehicle itself will account for such.  This hopefully will be simpler for many investors.  Investing involves risk and may result in partial or total loss of investment.  Prospective investors should carefully consider investment objectives, risks, charges, and expenses, and should consult with a tax or legal adviser before making any investment decision."
              }),
              createVNode(_component_v_expansion_panel, {
                title: "What type of tax document will I receive and when?",
                text: "Your Form 1099-DIV tax information will be provided by January 31st of the year following each taxable year.  We hope that this simplifies our portion of your tax season."
              }),
              createVNode(_component_v_expansion_panel, {
                title: "What is the investment strategy?",
                text: "Our current strategy is to act conservatively.  We aim to make every sale count, and purchase with equity already in the company's books at closing.  We expect to keep costs as low as possible while maintaining high quality standards, mostly by taking on an very aggressive management workload at an extremely generous price.  The motive of this project is predominantly moral, but we'd also like to increase our purchasing power to do additional good in the future if all goes well. This project, as stated above, has moral goals.  We want to give back to the world.  Part of sustainability obviously demands profitability, but banks and insurance companies take enough from the population, we'd much rather see these profits in the hands of our friends in the form of equity capital.  If you have the disposable income, we'd love to involve you! Although our primary focus will be on sustainable workforce housing, we may invest in other types of real estate assets if the first phase isn't feasible and other attractive opportunities arise, such as retrofits, office, industrial, retail, self-storage, etc.  Any project we take on will be in the spirit of sustainability. If enough investors are involved, (100) we will operate as a REIT.  If accredited investors want to participate, we will operate an Equity Fund to begin work on a separate phase, and likely a significantly different product."
              }),
              createVNode(_component_v_expansion_panel, {
                title: "What kind of returns may I expect?",
                text: "For stabilized, income-producing property investments, we target low- to mid-teens equity returns on an annualized basis over the entire life of the investment.  We may target equity returns that are higher or lower depending on the type of investment and amount of leverage utilized.  For example, if we invest in a property that requires significant repositioning through capital and marketing investments, we may forego near-term distributions to achieve a higher gain on the sale of the property in the longer term.  We target higher equity returns for these types of investments as they involve more risk.  Our targeted returns are just that, targets.  Investment involves risk and our actual returns may be higher or lower and may include a partial or total loss of your investment."
              }),
              createVNode(_component_v_expansion_panel, {
                title: "How will I be notified of how my investment is doing?",
                text: "We will provide you with periodic updates on the performance of your investment, including an annual report\u037E a semi\xADannual report\u037E current event reports for specified material events within ten business days of their occurrence\u037E supplements to the offering circular if we have material information to disclose to you\u037E and other reports that we may file or furnish to the Securities and Exchange Commission (SEC) from time to time.  We will provide this information to you by posting such information on the SEC\u2019s website at www.sec.gov.  We may also provide you with other information, such as a quarterly report on the vehicle's investments, that we will uploaded to a password-protected portal, and a notification of such instances will be emailed to you."
              }),
              createVNode(_component_v_expansion_panel, {
                title: "How often will I receive distributions?",
                text: "The distribution frequency is at our sole discretion, and the change in frequency can depend on many factors such as the property\u2019s cash flow level or needed capital expenditures.  Sometimes the cash flow of the property may not support a distribution.  Additionally, we may invest in a property with the plan of not paying any near-term distributions while we undertake a capital and repositioning program.  We plan to offer a window at the end of the first phase of development for investors to accept a distribution of funds in the full amount of their apportioned equity plus interest in exchange for their shares."
              }),
              createVNode(_component_v_expansion_panel, {
                title: "How much of Michael's own money does he invest?",
                text: "In short, as much as I can.  Some projects will receive more direct equity investment by Strain Investment Company LLC than others."
              }),
              createVNode(_component_v_expansion_panel, {
                title: "What happens if Michael dies young?",
                text: "That is a great question! We should discuss the reality of that situation. If Michael were to die, Strain Investment Company LLC and its property investments will continue to operate. Cash flow will continue to be generated and distributed to investors. We have a great team at Strain Investment Company LLC, and together, the team will continue with business as usual \u2013 maximizing the value of each property investment.  His wife would not remarry, so back off."
              }),
              createVNode(_component_v_expansion_panel, {
                title: "Who can invest in our non-accredited vehicle?",
                text: "Anyone!  Well, not anyone, but we are excited to offer our an investment vehicle to both accredited AND non-accredited investors!  Our new vehicle is open to everyday investors, however, you do need to meet suitability requirements, including you can invest no more than 10% of your annual income or net worth, along with the fact that you need to be a \u201CU.S. Person\u201D not subject to backup withholding tax, such as a U.S. citizen or resident, U.S. partnership, corporation or entity, or U.S. estate or trust."
              }),
              createVNode(_component_v_expansion_panel, {
                title: "What is the minimum amount I can invest?",
                text: "$1,000.  We want to give everyday investors the opportunity to invest in real estate."
              }),
              createVNode(_component_v_expansion_panel, {
                title: "What documents do I need to sign and how do I do that?",
                text: "Your documents will be sent via email to the address provided to us, and they are signed electronically."
              }),
              createVNode(_component_v_expansion_panel, {
                title: "Can I invest through my IRA?",
                text: "If you have an existing IRA or a 401K from a previous employer, it is likely that you will be able to self-direct all or a portion of it into our non-accredited vehicle.  Check with your current custodian to see if they will allow you to self-direct your retirement account.  If the answer is no, please contact us by email at straininvestmentscompany@gmail.com to see if we are able to work something out."
              }),
              createVNode(_component_v_expansion_panel, {
                title: "How long should I expect to invest?",
                text: "We intend to scale Harvest Valley Homes up to meet it's fullest potential.  It is our intent to do so carefully, over multiple phases over the course of multiple years.  At the end of each phase, a period of time will be taken to study the successes and failures of the community in it's current state so we can better prepare for following phases.  It is in our discretion to shorten or extend the vehicle's life. The reason for this is we want to maximize the value of our real estate investments. We do not want to be forced to sell the investments when the market is bad, nor do we want to pass up the opportunity to sell investments when the market is great."
              }),
              createVNode(_component_v_expansion_panel, {
                title: "Can I cancel my investment before the offering closes?",
                text: "Once you've begun the subscription process, you cannot cancel your investment electronically.  You must email us at straininvestmentscompany@gmail.com for additional assistance.  Depending on what part of the process we are in, you may not be able to cancel.  Each of your payments are non-refundable."
              }),
              createVNode(_component_v_expansion_panel, {
                title: "Can I get my money back or sell my shares after the offering closes?",
                text: "Once you are invested you should be prepared to stay invested for at least ten years.  We do not offer a redemption plan because that would reduce the cash flow available for distribution to our investors who want to stay invested through the entire lifecycle of the vehicle.  Generally speaking, the units will not be readily transferable.  There is no market for our units, nor is one expected to develop.  A unitholder may sell his or her units if a willing buyer is found, but that buyer must meet all suitability standards and other requirements applicable to the original unit holder.  We will not help you find a buyer, and all transfers must be approved in writing by Strain Investment Company LLC.  The buyer and seller will need to pay a reasonable fee to cover the costs in connection with the transfer."
              }),
              createVNode(_component_v_expansion_panel, {
                title: "What type of fees do you charge?",
                text: "Management Agreements have not been established at this time, however, we are currently asking for compensation to cover our living and operating expenses - which are expected to be minimal, in addition to 4% Preferred Returns at the end of each phase.  We are staking almost all of our time and efforts on success.  We reserve the right to retain up to 10% of the profits of each phase prior to distribution but after the window for investors to accept or roll-over their distributions, for use as capital for following phases and projects."
              }),
              createVNode(_component_v_expansion_panel, {
                title: "Is there risk involved?",
                text: "All investments involve risk.  We do not guarantee that you will earn our targeted returns.  There are many factors that can impact the performance of your investment, many of which are not under our control.  Please keep in mind, investing involves risk and may result in partial or total loss of your investment.  Prospective investors should carefully consider investment objectives, risks, charges, and expenses, and should consult with a tax or legal adviser before making any investment decision.  We do believe that investing in private real estate poses less risk than many other types of investments.  Private real estate has historically been less volatile than the stock market, and properties generally appreciate over time as inflation tends to push rents up.  Additionally, we conduct extensive research and due diligence on every property investment and have a high degree of conviction that our risk is balanced with our targeted returns.  Michael personally believes in the potential return of each of our investments.  During Michael's real estate career, he has never lost money with a real estate investment."
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_card, { class: "m-15" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="m-5 text-2xl"${_scopeId}> Strain Store </div>`);
        _push2(ssrRenderComponent(_component_v_expansion_panels, { variant: "accordion" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_expansion_panel, {
                title: "Refund and Replacement Policy",
                text: "If you have an issue with your order, contact our support team directly within seven days of product delivery. Please provide a detailed description of your issue, accompanied by relevant photo or video evidence that support your case. Products are unique and produced to order, therefore, they are non-refundable."
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_expansion_panel, {
                title: "Shipping Costs and Delivery",
                text: "Each item has a shipping fee of $2. If the item total exceeds $20, the shipping cost will be waived. Shipping times are estimated average times and are in no way guaranteed. If your order takes more than ten days to be delivered, please contact our support team."
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_expansion_panel, {
                title: "Incorrect Delivery Address",
                text: "If an order is returned to Printify due to an incorrect address, the User will be contacted by Printify Merchant Support to arrange a reshipment. The User will be liable for the reshipment costs once an updated address is provided and confirmed. Otherwise, packages will be donated after one week if Printify Merchant Support is not provided with a valid address for the reshipment. Reshipment costs include the original shipping cost of the product and a service fee of $4. The service fee covers any Charge On Delivery (C.O.D) fees that we get charged by the fulfillment operator and handling fees."
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_expansion_panel, {
                title: "Payment Processing",
                text: "Answer"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_expansion_panel, {
                title: "Contact Strain Store Support",
                text: "For any questions, comments, or concerns, please send an email to ashley.n.strain@gmail.com."
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_expansion_panel, {
                title: "Question",
                text: "Answer"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_expansion_panel, {
                title: "Question",
                text: "Answer"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_expansion_panel, {
                  title: "Refund and Replacement Policy",
                  text: "If you have an issue with your order, contact our support team directly within seven days of product delivery. Please provide a detailed description of your issue, accompanied by relevant photo or video evidence that support your case. Products are unique and produced to order, therefore, they are non-refundable."
                }),
                createVNode(_component_v_expansion_panel, {
                  title: "Shipping Costs and Delivery",
                  text: "Each item has a shipping fee of $2. If the item total exceeds $20, the shipping cost will be waived. Shipping times are estimated average times and are in no way guaranteed. If your order takes more than ten days to be delivered, please contact our support team."
                }),
                createVNode(_component_v_expansion_panel, {
                  title: "Incorrect Delivery Address",
                  text: "If an order is returned to Printify due to an incorrect address, the User will be contacted by Printify Merchant Support to arrange a reshipment. The User will be liable for the reshipment costs once an updated address is provided and confirmed. Otherwise, packages will be donated after one week if Printify Merchant Support is not provided with a valid address for the reshipment. Reshipment costs include the original shipping cost of the product and a service fee of $4. The service fee covers any Charge On Delivery (C.O.D) fees that we get charged by the fulfillment operator and handling fees."
                }),
                createVNode(_component_v_expansion_panel, {
                  title: "Payment Processing",
                  text: "Answer"
                }),
                createVNode(_component_v_expansion_panel, {
                  title: "Contact Strain Store Support",
                  text: "For any questions, comments, or concerns, please send an email to ashley.n.strain@gmail.com."
                }),
                createVNode(_component_v_expansion_panel, {
                  title: "Question",
                  text: "Answer"
                }),
                createVNode(_component_v_expansion_panel, {
                  title: "Question",
                  text: "Answer"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode("div", { class: "m-5 text-2xl" }, " Strain Store "),
          createVNode(_component_v_expansion_panels, { variant: "accordion" }, {
            default: withCtx(() => [
              createVNode(_component_v_expansion_panel, {
                title: "Refund and Replacement Policy",
                text: "If you have an issue with your order, contact our support team directly within seven days of product delivery. Please provide a detailed description of your issue, accompanied by relevant photo or video evidence that support your case. Products are unique and produced to order, therefore, they are non-refundable."
              }),
              createVNode(_component_v_expansion_panel, {
                title: "Shipping Costs and Delivery",
                text: "Each item has a shipping fee of $2. If the item total exceeds $20, the shipping cost will be waived. Shipping times are estimated average times and are in no way guaranteed. If your order takes more than ten days to be delivered, please contact our support team."
              }),
              createVNode(_component_v_expansion_panel, {
                title: "Incorrect Delivery Address",
                text: "If an order is returned to Printify due to an incorrect address, the User will be contacted by Printify Merchant Support to arrange a reshipment. The User will be liable for the reshipment costs once an updated address is provided and confirmed. Otherwise, packages will be donated after one week if Printify Merchant Support is not provided with a valid address for the reshipment. Reshipment costs include the original shipping cost of the product and a service fee of $4. The service fee covers any Charge On Delivery (C.O.D) fees that we get charged by the fulfillment operator and handling fees."
              }),
              createVNode(_component_v_expansion_panel, {
                title: "Payment Processing",
                text: "Answer"
              }),
              createVNode(_component_v_expansion_panel, {
                title: "Contact Strain Store Support",
                text: "For any questions, comments, or concerns, please send an email to ashley.n.strain@gmail.com."
              }),
              createVNode(_component_v_expansion_panel, {
                title: "Question",
                text: "Answer"
              }),
              createVNode(_component_v_expansion_panel, {
                title: "Question",
                text: "Answer"
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` --&gt; <!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/legal/faqs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const faqs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { faqs as default };
//# sourceMappingURL=faqs.ba35de9e.mjs.map
