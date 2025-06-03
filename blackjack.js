class BlackjackGame {
    constructor() {
        this.deck = [];
        this.playerHand = [];
        this.dealerHand = [];
        this.gameOver = false;
        this.isMuted = false;
        
        this.initializeElements();
        this.initializeSounds();
        this.bindEvents();
    }
    
    initializeElements() {
        this.dealerCardsEl = document.getElementById('dealer-cards');
        this.playerCardsEl = document.getElementById('player-cards');
        this.dealerScoreEl = document.getElementById('dealer-score');
        this.playerScoreEl = document.getElementById('player-score');
        this.messageEl = document.getElementById('message');
        this.newGameBtn = document.getElementById('new-game-btn');
        this.hitBtn = document.getElementById('hit-btn');
        this.standBtn = document.getElementById('stand-btn');
        this.muteBtn = document.getElementById('mute-btn');
    }
    
    initializeSounds() {
        this.sounds = {
            cardDeal: this.createSound('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBiuBzvPTgjMGHm7A7+OZURE'),
            shuffle: this.createSound('data:audio/wav;base64,UklGRlAFAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YSwFAACBg4WFhYWDgYGDg4WFg4GBg4OHh4eBf39/f3+Dg4WFg39/f39/g4OFhYGBgYODhYWDgYGBgYGDg4WDg3+Bf39/f3+Bg4OFg4F/f39/f4GDg4OBf39/f3+BgYODg39/f39/f4GBg4GBf39/f39/gYGDg39/f39/f4GBg4GBf39/f3+BgYGBf39/f39/f4GBgYF/f39/f3+BgYGBf39/f39/f4GBgYGBf39/f3+BgYGBf39/f39/f4GBgYF/f39/f39/f4GBgX9/f39/f39/gYGBgX9/f39/f39/gYGBf39/f39/f39/gYGBf39/f39/f39/gYGBf39/f39/f39/f4GBgX9/f39/f39/f4GBgX9/f39/f39/f4GBgX9/f39/f39/f3+BgYF/f39/f39/f39/gYF/f39/f39/f39/gYF/f39/f39/f39/gYGBf39/f39/f39/gYGBf39/f39/f39/gYGBf39/f39/f39/gYGBf39/f39/f39/gYGBf39/f3+Bg4F/f39/f3+Bg4GBf39/f3+Bg4GBf39/f3+Bg4GBf39/f3+Bg4GBf39/f3+Bg4GBf39/f3+Bg4F/f39/f3+Bg4F/f39/f39/gYGBf39/f3+Bg4F/f39/f3+Bg4GBf39/f3+Bg4GBf39/f3+Bg4GBf39/f39/gYGBf39/f39/gYGBf39/f39/gYF/f39/f39/gYGBf39/f39/gYGBf39/f39/gYGBf39/f39/gYGBf39/f39/gYGBf39/f39/gYGBf39/f39/gYGBf39/f3+BgYGBf39/f39/gYGBf39/f39/gYGBf39/f39/gYGBf39/f3+BgYGBf39/f39/gYGBf39/f3+BgYGBf39/f39/gYGBf39/f39/gYGBf39/f39/gYGBf39/f3+BgYGBf39/f39/gYGBf39/f3+BgYGBf39/f39/gYGBf39/f3+BgYGBf39/f39/gYGBf39/f3+BgYGBf39/f39/gYGBf39/f3+BgYGBf39/f39/gYGBf39/f39/gYGBf39/f39/gYGBf39/f39/gYGBf39/f39/gYGBgX9/f39/gYGBgX9/f39/gYGBgX9/f39/f4GBgX9/f39/f4GBgX9/f39/f4GBgX9/f39/f4GBgX9/f39/f4GBgX9/f39/f4GBgX9/f39/f4GBgX9/f39/f4GBgX9/f39/f4GBgX9/f39/f4GBgX9/f39/f4GBgX9/f39/gYGBgX9/f39/gYGBgX9/f39/gYGBgX9/f39/gYGBgX9/f39/gYOBg39/f39/gYOBg39/f39/gYOBg39/f39/gYOBg39/f39/gYOBg39/f39/gYOBg39/f39/g4ODg39/f39/g4ODg39/f39/g4ODg39/f39/g4ODg39/f39/g4ODg39/f39/g4ODg39/f39/g4ODg39/f39/g4ODg39/f39/g4ODg39/f39/g4ODg39/f39/g4ODg39/f39/g4ODg39/f39/g4ODg4F/f39/g4ODg4F/f39/g4ODg4F/f39/g4ODg4F/f39/g4ODg4F/f39/g4ODg4F/f39/g4ODg4F/f39/g4ODg4F/f39/g4ODg4F/f39/g4ODg4F/f39/g4ODg4F/f39/g4WDg4F/f39/g4WDg4F/f39/g4WDg4F/f39/g4WDg4F/f39/g4WDg4F/f39/g4WDg4F/f39/g4WDg4F/f39/g4WDg4F/f39/g4WDg4F/f3+Bg4WDg4F/f3+Bg4WDg4F/f3+Bg4WDg4F/f3+Bg4WDg4F/f3+Bg4WDg4F/f3+Bg4WDg4F/f3+Bg4WDg4F/f3+Bg4WDg4F/f3+Bg4WDg4GBf3+Bg4WDg4GBf3+Bg4WDg4GBf3+Bg4WDg4GBf3+Bg4WDg4GBf3+Bg4WDg4GBf3+Bg4WDg4GBf3+Bg4WDg4GBf3+Bg4WDg4GBf3+Bg4WDg4GBf3+Bg4WDg4GBgX+Bg4WDg4GBgX+Bg4WDg4GBgX+Bg4WDg4GBgX+Bg4WDg4GBgX+Bg4WDg4GBgX+Bg4WDg4GBgX+Bg4WDg4GBgX+Bg4WDg4GBgX+Bg4WDg4GBgX+Bg4WDg4GBgX+Bg4WDg4GBgX+Bg4WDg4GBgX+Bg4WDg4GBgX+Bg4WDg4GBgX+Bg4WDg4GBgX+Bg4WDg4GBgX+Bg4WFg4GBgX+Bg4WFg4GBgX+Bg4WFg4GBgX+Dg4WFg4GBgX+Dg4WFg4GBgX+Dg4WFg4GBgX+Dg4WFg4GBgX+Dg4WFg4GBgX+Dg4WFg4GBgX+Dg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDg4WFg4GBgYGDhQ=='),
            buttonClick: this.createSound('data:audio/wav;base64,UklGRjIBAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQ4BAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGAgICAgICAgICAgICAgICAgICAgICAgICAgICAgA=='),
            win: this.createSound('data:audio/wav;base64,UklGRvgGAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YdQGAACBgoOEhYaHiImKi4yNjo+QkZKTlJWWl5iZmpucnZ6foKGio6SlpqeoqaqrrK2ur7CxsrO0tba3uLm6u7y9vr/AwcLDxMXGx8jJysvMzc7P0NHS09TV1tfY2drb3N3e3+Dh4uPk5ebn6Onq6+zt7u/w8fLz9PX29/j5+vv8/f7/AAH+/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYCBgoOEhYaHiImKi4yNjo+QkZKTlJWWl5iZmpucnZ6foKGio6SlpqeoqaqrrK2ur7CxsrO0tba3uLm6u7y9vr/AwcLDxMXGx8jJysvMzc7P0NHS09TV1tfY2drb3N3e3+Dh4uPk5ebn6Onq6+zt7u/w8fLz9PX29/j5+vv8/f7/AAH+/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYCBgoOEhYaHiImKi4yNjo+QkZKTlJWWl5iZmpucnZ6foKGio6SlpqeoqaqrrK2ur7CxsrO0tba3uLm6u7y9vr/AwcLDxMXGx8jJysvMzc7P0NHS09TV1tfY2drb3N3e3+Dh4uPk5ebn6Onq6+zt7u/w8fLz9PX29/j5+vv8/f7/AAH+/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYCBgoOEhYaHiImKi4yNjo+QkZKTlJWWl5iZmpucnZ6foKGio6SlpqeoqaqrrK2ur7CxsrO0tba3uLm6u7y9vr/AwcLDxMXGx8jJysvMzc7P0NHS09TV1tfY2drb3N3e3+Dh4uPk5ebn6Onq6+zt7u/w8fLz9PX29/j5+vv8/f7/AAH+/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYCBgoOEhYaHiImKi4yNjo+QkZKTlJWWl5iZmpucnZ6foKGio6SlpqeoqaqrrK2ur7CxsrO0tba3uLm6u7y9vr/AwcLDxMXGx8jJysvMzc7P0NHS09TV1tfY2drb3N3e3+Dh4uPk5ebn6Onq6+zt7u/w8fLz9PX29/j5+vv8/f7/AAH+/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYCBgoOEhYaHiImKi4yNjo+QkZKTlJWWl5iZmpucnZ6foKGio6SlpqeoqaqrrK2ur7CxsrO0tba3uLm6u7y9vr/AwcLDxMXGx8jJysvMzc7P0NHS09TV1tfY2drb3N3e3+Dh4uPk5ebn6Onq6+zt7u/w8fLz9PX29/j5+vv8/f7/AAH+/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgQ=='),
            lose: this.createSound('data:audio/wav;base64,UklGRogFAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YWQFAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AANzcZma7u1VVsLBKSqWlPz+amjQ0j480NISDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmEgykphIMpKYSDKSmPjzQ0mpk0NKWlPz+wsFVVu7tVVdzc3Nz//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAA=')
        };
    }

    createSound(base64) {
        const audio = new Audio(base64);
        audio.volume = 0.3;
        return audio;
    }

    playSound(soundName) {
        if (!this.isMuted && this.sounds[soundName]) {
            this.sounds[soundName].currentTime = 0;
            this.sounds[soundName].play().catch(() => {});
        }
    }

    bindEvents() {
        this.newGameBtn.addEventListener('click', () => {
            this.playSound('buttonClick');
            this.startNewGame();
        });
        this.hitBtn.addEventListener('click', () => {
            this.playSound('buttonClick');
            this.hit();
        });
        this.standBtn.addEventListener('click', () => {
            this.playSound('buttonClick');
            this.stand();
        });
        this.muteBtn.addEventListener('click', () => {
            this.isMuted = !this.isMuted;
            this.muteBtn.textContent = this.isMuted ? '🔇' : '🔊';
            this.playSound('buttonClick');
        });
    }
    
    createDeck() {
        this.deck = [];
        const suits = ['♠', '♥', '♦', '♣'];
        const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        
        for (const suit of suits) {
            for (const value of values) {
                this.deck.push({
                    suit: suit,
                    value: value,
                    color: (suit === '♥' || suit === '♦') ? 'red' : 'black'
                });
            }
        }
        
        this.shuffleDeck();
    }
    
    shuffleDeck() {
        this.playSound('shuffle');
        for (let i = this.deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }
    
    dealCard() {
        return this.deck.pop();
    }
    
    calculateScore(hand) {
        let score = 0;
        let aces = 0;
        
        for (const card of hand) {
            if (card.value === 'A') {
                aces++;
                score += 11;
            } else if (['J', 'Q', 'K'].includes(card.value)) {
                score += 10;
            } else {
                score += parseInt(card.value);
            }
        }
        
        while (score > 21 && aces > 0) {
            score -= 10;
            aces--;
        }
        
        return score;
    }
    
    createCardElement(card, isHidden = false) {
        const cardEl = document.createElement('div');
        cardEl.className = `card ${card.color}`;
        
        if (isHidden) {
            cardEl.classList.add('hidden');
        } else {
            cardEl.innerHTML = `
                <div>${card.value}</div>
                <div>${card.suit}</div>
            `;
        }
        
        return cardEl;
    }
    
    updateDisplay() {
        this.dealerCardsEl.innerHTML = '';
        this.playerCardsEl.innerHTML = '';
        
        this.dealerHand.forEach((card, index) => {
            const isHidden = !this.gameOver && index === 0;
            this.dealerCardsEl.appendChild(this.createCardElement(card, isHidden));
        });
        
        this.playerHand.forEach(card => {
            this.playerCardsEl.appendChild(this.createCardElement(card));
        });
        
        const dealerScore = this.gameOver ? 
            this.calculateScore(this.dealerHand) : 
            this.calculateScore(this.dealerHand.slice(1));
        
        const playerScore = this.calculateScore(this.playerHand);
        
        this.dealerScoreEl.textContent = this.gameOver ? dealerScore : '?';
        this.playerScoreEl.textContent = playerScore;
    }
    
    startNewGame() {
        this.createDeck();
        this.playerHand = [];
        this.dealerHand = [];
        this.gameOver = false;
        this.messageEl.textContent = '';
        this.messageEl.className = 'message';
        
        setTimeout(() => {
            this.playerHand.push(this.dealCard());
            this.playSound('cardDeal');
            this.updateDisplay();
            
            setTimeout(() => {
                this.dealerHand.push(this.dealCard());
                this.playSound('cardDeal');
                this.updateDisplay();
                
                setTimeout(() => {
                    this.playerHand.push(this.dealCard());
                    this.playSound('cardDeal');
                    this.updateDisplay();
                    
                    setTimeout(() => {
                        this.dealerHand.push(this.dealCard());
                        this.playSound('cardDeal');
                        this.updateDisplay();
                        
                        this.hitBtn.disabled = false;
                        this.standBtn.disabled = false;
                        
                        if (this.calculateScore(this.playerHand) === 21) {
                            this.checkWinner();
                        }
                    }, 300);
                }, 300);
            }, 300);
        }, 300);
    }
    
    hit() {
        if (this.gameOver) return;
        
        this.playerHand.push(this.dealCard());
        this.playSound('cardDeal');
        this.updateDisplay();
        
        if (this.calculateScore(this.playerHand) > 21) {
            this.endGame('You bust! Dealer wins!', 'lose');
        } else if (this.calculateScore(this.playerHand) === 21) {
            this.stand();
        }
    }
    
    stand() {
        if (this.gameOver) return;
        
        const dealerDraw = () => {
            if (this.calculateScore(this.dealerHand) < 17) {
                this.dealerHand.push(this.dealCard());
                this.playSound('cardDeal');
                this.updateDisplay();
                setTimeout(dealerDraw, 500);
            } else {
                this.checkWinner();
            }
        };
        
        setTimeout(dealerDraw, 500);
    }
    
    checkWinner() {
        const playerScore = this.calculateScore(this.playerHand);
        const dealerScore = this.calculateScore(this.dealerHand);
        
        if (dealerScore > 21) {
            this.endGame('Dealer busts! You win!', 'win');
        } else if (playerScore > dealerScore) {
            this.endGame('You win!', 'win');
        } else if (dealerScore > playerScore) {
            this.endGame('Dealer wins!', 'lose');
        } else {
            this.endGame('It\'s a tie!', 'tie');
        }
    }
    
    endGame(message, result) {
        this.gameOver = true;
        this.hitBtn.disabled = true;
        this.standBtn.disabled = true;
        this.messageEl.textContent = message;
        this.messageEl.className = `message ${result}`;
        this.updateDisplay();
        
        setTimeout(() => {
            if (result === 'win') {
                this.playSound('win');
            } else if (result === 'lose') {
                this.playSound('lose');
            }
        }, 300);
    }
}

const game = new BlackjackGame();