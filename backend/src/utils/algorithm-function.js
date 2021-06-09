const stock_recommandation_function = (stock_data) => {
    if (!stock_data) {
        return {
            data: {},
            error: ["No data found"],
            msg: "No Data!",
        };
    }

    const market_type = stock_data.market_type;
    const script = stock_data.script;
    const buy_price = stock_data.buy_price;
    const target_price = stock_data.target;
    const stop_loss = stock_data.stop_loss;
    const duration = stock_data.duration;
    const transaction_type = stock_data.call_type;

    let loss_on_slt;
    let expected_Returns;
    let success;
    let realized_return;
    let In_Time_or_late;
    let TF;
    let HP;
    let QF;
    const Revision_Factor = 1;

    if (transaction_type == "BUY") {
        expected_Returns = (buy_price - target_price) / 100 / buy_price;
    } else if (transaction_type == "SELL") {
        expected_Returns = (target_price - buy_price) / 100 / buy_price;
    }

    if (transaction_type == "BUY") {
        loss_on_slt = (buy_price - stop_loss) / buy_price;
    } else if (transaction_type == "SELL") {
        loss_on_slt = (stop_loss - buy_price) / buy_price;
    }

    if (success == "YES") {
        realized_return = expected_Returns;
    } else if (success == "NO") {
        realized_return = "-" + loss_on_slt;
    }

    if ((success = "YES")) {
        HP = 3;
    } else {
        HP = 0;
    }

    if ((HP = 0)) {
    } else if ((success = "In time")) {
        TF = 2;
    } else if ((success = "Late")) {
        TF = 1.5;
    } else if ((success = "Very Late")) {
        TF = 1;
    }

    if ((market_type = "equity") && (market_type = "intraday")) {
        if (realized_return > 1.2) {
            QF = 4;
        } else if (realized_return > 0.9) {
            QF = 3;
        } else if (realized_return > 0.6) {
            QF = 2;
        } else if (realized_return > 0.3) {
            QF = 1;
        } else if (realized_return <= 0.3) {
            QF = 0;
        }
    } else if ((market_type = "equity") && (market_type = "BTST/STBT")) {
        if (realized_return > 1.25) {
            QF = 4;
        } else if (realized_return > 1) {
            QF = 3;
        } else if (realized_return > 0.75) {
            QF = 2;
        } else if (realized_return > 0.5) {
            QF = 1;
        } else if (realized_return <= 0.5) {
            QF = 0;
        }
    } else if ((market_type = "equity") && (market_type = "Short Term")) {
        if (realized_return > 3.5) {
            QF = 4;
        } else if (realized_return > 2.5) {
            QF = 3;
        } else if (realized_return > 2.5) {
            QF = 2;
        } else if (realized_return > 2) {
            QF = 1;
        } else if (realized_return <= 2) {
            QF = 0;
        }
    } else if ((market_type = "equity") && (market_type = "Mid Term")) {
        if (realized_return > 4.5) {
            QF = 4;
        } else if (realized_return > 4) {
            QF = 3;
        } else if (realized_return > 3.5) {
            QF = 2;
        } else if (realized_return > 3) {
            QF = 1;
        } else if (realized_return <= 3) {
            QF = 0;
        }
    } else if ((market_type = "equity") && (market_type = "Long Term")) {
        if (realized_return > 6) {
            QF = 4;
        } else if (realized_return > 5) {
            QF = 3;
        } else if (realized_return > 4.5) {
            QF = 2;
        } else if (realized_return > 4) {
            QF = 1;
        } else if (realized_return <= 4) {
            QF = 0;
        }
    } else if ((market_type = "futures") && (market_type = "Intraday")) {
        if (realized_return > 1.25) {
            QF = 4;
        } else if (realized_return > 1) {
            QF = 3;
        } else if (realized_return > 0.75) {
            QF = 2;
        } else if (realized_return > 0.5) {
            QF = 1;
        } else if (realized_return <= 0.5) {
            QF = 0;
        }
    } else if ((market_type = "futures") && (market_type = "Week Position")) {
        if (realized_return > 1.75) {
            QF = 4;
        } else if (realized_return > 1.25) {
            QF = 3;
        } else if (realized_return > 0.9) {
            QF = 2;
        } else if (realized_return > 0.6) {
            QF = 1;
        } else if (realized_return <= 0.3) {
            QF = 0;
        }
    } else if ((market_type = "futures") && (market_type = "Monthly Expiry")) {
        if (realized_return > 2.25) {
            QF = 4;
        } else if (realized_return > 1.75) {
            QF = 3;
        } else if (realized_return > 1.25) {
            QF = 2;
        } else if (realized_return > 0.75) {
            QF = 1;
        } else if (realized_return <= 0.75) {
            QF = 0;
        }
    } else if ((market_type = "options") && (market_type = "intraday")) {
        if (realized_return > 2.5) {
            QF = 4;
        } else if (realized_return > 2) {
            QF = 3;
        } else if (realized_return > 1.5) {
            QF = 2;
        } else if (realized_return > 1) {
            QF = 1;
        } else if (realized_return <= 1) {
            QF = 0;
        }
    } else if ((market_type = "options") && (market_type = "weekly expiry")) {
        if (realized_return > 3.5) {
            QF = 4;
        } else if (realized_return > 2.75) {
            QF = 3;
        } else if (realized_return > 2) {
            QF = 2;
        } else if (realized_return > 1.25) {
            QF = 1;
        } else if (realized_return <= 1.25) {
            QF = 0;
        }
    } else if ((market_type = "options") && (market_type = "monthly expiry")) {
        if (realized_return > 5) {
            QF = 4;
        } else if (realized_return > 4) {
            QF = 3;
        } else if (realized_return > 3) {
            QF = 2;
        } else if (realized_return > 2) {
            QF = 1;
        } else if (realized_return <= 2) {
            QF = 0;
        }
    }

    let score = (HP * TF + QF) * realized_return;

    return {
        data: { score },
        error: [],
        msg: "Success!",
    };
};

export default stock_recommandation_function;
